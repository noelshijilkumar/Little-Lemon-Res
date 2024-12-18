import { render, screen } from '@testing-library/react';
import ReservationSummary from '../../../components/booking/ReservationSummary';
import { describe, it, expect } from 'vitest';

describe('ReservationSummary Component', () => {
    const basicInfo = {
        name: 'John Doe',
    };

    const reservationInfo = {
        date: '2024-12-20',
        time: '7:00 PM',
        guests: 4,
        occasion: 'Birthday',
        seating: 'Outdoor',
        specialRequest: 'Vegan options, please.',
    };

    it('renders the heading and all reservation details', () => {
        render(<ReservationSummary basicInfo={basicInfo} reservationInfo={reservationInfo} />);

        // Check heading
        expect(
            screen.getByRole('heading', { name: /Thank You for Your Reservation!/i })
        ).toBeInTheDocument();

        // Check reservation details
        expect(screen.getByText(/John Doe/)).toHaveTextContent('John Doe');
        expect(screen.getByText(/2024-12-20/)).toHaveTextContent('2024-12-20');
        expect(screen.getByText(/7:00 PM/)).toHaveTextContent('7:00 PM');
    });

    it('conditionally renders the Special Request if provided', () => {
        const reservationWithoutSpecialRequest = { ...reservationInfo, specialRequest: undefined };

        render(<ReservationSummary basicInfo={basicInfo} reservationInfo={reservationWithoutSpecialRequest} />);

        // Check that special request is not in the document
        expect(screen.queryByText(/Special Request:/)).not.toBeInTheDocument();
    });

    it('renders the summary message', () => {
        render(<ReservationSummary basicInfo={basicInfo} reservationInfo={reservationInfo} />);

        // Check summary message
        expect(
            screen.getByText('The reservesion info has been sent to your email. See you soon!')
        ).toBeInTheDocument();
    });
});
