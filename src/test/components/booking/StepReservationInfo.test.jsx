import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StepReservationInfo from "../../../components/booking/StepReservationInfo";
import { describe, it, expect, vi } from "vitest";
import { BookingContext } from '../../../context/booking/BookingContext';

// Mock useAvailableTimes hook
vi.mock('../../hooks/useAvailableTimes', () => ({
    useAvailableTimes: () => ({
        availableTimes: ['18:00', '19:00', '20:00'],
        loadingTimes: false,
        error: null,
    }),
}));

describe('StepReservationInfo Component', () => {
    const mockSetReservationInfo = vi.fn();
    const mockOnBack = vi.fn();
    const mockOnReserve = vi.fn();
    const mockDispatch = vi.fn();

    const mockContext = {
        state: {
            availableTimes: ['18:00', '19:00', '20:00'],
        },
        dispatch: mockDispatch,
    };

    it('renders the reservation form fields correctly', () => {
        render(
            <BookingContext.Provider value={mockContext}>
                <StepReservationInfo
                    reservationInfo={{
                        date: '',
                        time: '',
                        guests: 1,
                        occasion: '',
                        seating: '',
                        specialRequest: '',
                    }}
                    setReservationInfo={mockSetReservationInfo}
                    onBack={mockOnBack}
                    onReserve={mockOnReserve}
                />
            </BookingContext.Provider>
        );

        // Check that required fields are present
        expect(screen.getByLabelText(/Date\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Time\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests\*/i)).toBeInTheDocument();
        expect(screen.getByText(/Occasion/i)).toBeInTheDocument();
        expect(screen.getByText(/Seating Option/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Special Requests/i)).toBeInTheDocument();
    });

    it('validates inputs and calls setReservationInfo on submit', async () => {
        render(
            <BookingContext.Provider value={mockContext}>
                <StepReservationInfo
                    reservationInfo={{
                        date: '',
                        time: '',
                        guests: 1,
                        occasion: '',
                        seating: '',
                        specialRequest: '',
                    }}
                    setReservationInfo={mockSetReservationInfo}
                    onBack={mockOnBack}
                    onReserve={mockOnReserve}
                />
            </BookingContext.Provider>
        );

        // Simulate filling the form
        const dateInput = screen.getByLabelText(/Date\*/i);
        const timeSelect = screen.getByLabelText(/Time\*/i);
        const guestsInput = screen.getByLabelText(/Number of Guests\*/i);
        const submitButton = screen.getByRole('button', { name: /Reserve Table/i });

        fireEvent.change(dateInput, { target: { value: '2050-12-25' } });
        fireEvent.change(timeSelect, { target: { value: '18:00' } });
        fireEvent.change(guestsInput, { target: { value: '5' } });

        fireEvent.click(submitButton);

        // Assert validation success and function calls
        await waitFor(() => {
            expect(mockSetReservationInfo).toHaveBeenCalledWith({
                date: '2050-12-25',
                time: '18:00',
                guests: 5,
                occasion: '',
                seating: '',
                specialRequest: '',
            });
            expect(mockOnReserve).toHaveBeenCalled();
        });
    });

    it('shows error messages for invalid inputs', async () => {
        render(
            <BookingContext.Provider value={mockContext}>
                <StepReservationInfo
                    reservationInfo={{
                        date: '',
                        time: '',
                        guests: '',
                        occasion: '',
                        seating: '',
                        specialRequest: '',
                    }}
                    setReservationInfo={mockSetReservationInfo}
                    onBack={mockOnBack}
                    onReserve={mockOnReserve}
                />
            </BookingContext.Provider>
        );

        const submitButton = screen.getByRole('button', { name: /Reserve Table/i });

        fireEvent.click(submitButton);

        // Check for validation errors
        await waitFor(() => {
            expect(screen.getByText(/Please enter a reservation date\./i)).toBeInTheDocument();
            expect(screen.getByText(/Please enter a reservation time\./i)).toBeInTheDocument();
        });
    });
});