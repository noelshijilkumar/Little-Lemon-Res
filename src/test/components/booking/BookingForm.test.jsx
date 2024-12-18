import { render, screen, fireEvent } from "@testing-library/react";
import { BookingContext } from "../../../context/booking/BookingContext";
import BookingForm from "../../../components/booking/BookingForm";
import { ChakraProvider } from "@chakra-ui/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { act } from "react-dom/test-utils";

// Mock initial context state
const mockInitialState = {
    step: 1,
    basicInfo: { name: "", email: "" },
    reservationInfo: { date: "", time: "", guests: 1, occasion: "", seating: "", specialRequest: "" },
    availableTimes: ["12:00", "13:00", "14:00"]
};

let mockState;
const mockDispatch = vi.fn();

// Wrapper component to provide context
const Wrapper = ({ children }) => (
    <ChakraProvider>
        <BookingContext.Provider value={{ state: mockState, dispatch: mockDispatch }}>
            {children}
        </BookingContext.Provider>
    </ChakraProvider>
);

describe("BookingForm", () => {
    beforeEach(() => {
        mockState = { ...mockInitialState }; // Reset state before each test
        mockDispatch.mockClear(); // Clear mock calls
    });

    const renderWithStep = (step, overrides = {}) => {
        mockState.step = step;
        mockState = { ...mockState, ...overrides };
        render(<BookingForm />, { wrapper: Wrapper });
    };

    it("renders the correct step", () => {
        renderWithStep(1);

        // Verify the first step (Basic Info) is rendered
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it("renders the progress bar correctly", () => {
        renderWithStep(1);

        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveAttribute("aria-valuenow", "33.33333333333333");
    });

    it("renders Reservation Info step correctly", () => {
        const reservationData = {
            reservationInfo: {
                date: "2024-12-25",
                time: "12:00",
                guests: 2,
                occasion: "Casual",
                seating: "Indoor",
                specialRequest: "Window seat",
            },
        };

        renderWithStep(2, reservationData);

        // Check if the Reservation Info form elements are rendered
        expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
        expect(screen.getByText(/Occasion/i)).toBeInTheDocument();
        expect(screen.getByText(/Seating Option/i)).toBeInTheDocument();
        expect(screen.getByText(/Special Requests/i)).toBeInTheDocument();

        // Ensure the values are pre-filled
        expect(screen.getByLabelText(/Date/i)).toHaveValue("2024-12-25");
        expect(screen.getByLabelText(/Time/i)).toHaveValue("12:00");
        expect(screen.getByLabelText(/Number of Guests/i)).toHaveValue(2);
    });

    it("handles Back button click", async () => {
        renderWithStep(2);

        // Click the "Back" button
        const backButton = screen.getByRole("button", { name: /Back/i });
        await act(async () => {
            fireEvent.click(backButton);
        });

        // Ensure the dispatch function was called with the correct action
        expect(mockDispatch).toHaveBeenCalledWith({ type: "PREVIOUS_STEP" });
    });
});
