import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import StepBasicInfo from '../../../components/booking/StepBasicInfo';
import { describe, it, expect, vi, beforeEach } from 'vitest';


describe('StepBasicInfo Component', () => {
    const basicInfo = { name: '', phone: '', email: '' };
    const mockSetBasicInfo = vi.fn();
    const mockOnNext = vi.fn();

    beforeEach(() => {
        mockSetBasicInfo.mockClear();
        mockOnNext.mockClear();
    });

    it('renders all input fields and the submit button', () => {
        render(
            <StepBasicInfo
                basicInfo={basicInfo}
                setBasicInfo={mockSetBasicInfo}
                onNext={mockOnNext}
            />
        );

        // Check input fields
        expect(screen.getByText(/Name\*/i)).toBeInTheDocument();
        expect(screen.getByText(/Phone\*/i)).toBeInTheDocument();
        expect(screen.getByText(/Email\*/i)).toBeInTheDocument();

        // Check submit button
        expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
    });

    it('displays validation errors for invalid inputs', async () => {
        render(
        <StepBasicInfo
            basicInfo={basicInfo}
            setBasicInfo={mockSetBasicInfo}
            onNext={mockOnNext}
        />
        );

        // Trigger validation errors by submitting without entering values
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));

        // Check validation messages
        expect(await screen.findByText(/Please enter a name for the reservesion/i)).toBeInTheDocument();
        expect(await screen.findByText(/Please enter a phone for any change that may occur./i)).toBeInTheDocument();
        expect(await screen.findByText(/Please enter a email for confirmation./i)).toBeInTheDocument();
    });

    it('accepts valid inputs and calls callbacks', async () => {
        render(
            <StepBasicInfo
                basicInfo={basicInfo}
                setBasicInfo={mockSetBasicInfo}
                onNext={mockOnNext}
            />
        );

        // Enter valid inputs
        fireEvent.change(screen.getByLabelText(/Name\*/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Phone\*/i), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByLabelText(/Email\*/i), { target: { value: 'john.doe@example.com' } });


        // Submit the form
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));

        // Wait for form submission to complete
        await waitFor(() => {
            expect(mockSetBasicInfo).toHaveBeenCalledWith({
                name: 'John Doe',
                phone: '1234567890',
                email: 'john.doe@example.com',
            });
            expect(mockOnNext).toHaveBeenCalled();
        });
    });
});
