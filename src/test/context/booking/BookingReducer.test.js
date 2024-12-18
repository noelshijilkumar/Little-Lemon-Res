import { describe, it, expect } from 'vitest';
import { bookingReducer, initialBooking } from '../../../context/booking/BookingReducer';

describe('BookingReducer', () => {
    it('should throw an error when an unknown action is dispatched', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        expect(() => bookingReducer(initialBooking, action)).toThrow(
            `Unhandled action type: ${action.type}`
        );
    });

    it('should update basicInfo when SET_BASIC_INFO action is dispatched', () => {
        const action = {
        type: 'SET_BASIC_INFO',
        payload: { name: 'John Doe', email: 'john@example.com' },
        };
        const newState = bookingReducer(initialBooking, action);
        expect(newState.basicInfo.name).toBe('John Doe');
        expect(newState.basicInfo.email).toBe('john@example.com');
    });

    it('should update reservationInfo when SET_RESERVATION_INFO action is dispatched', () => {
        const action = {
        type: 'SET_RESERVATION_INFO',
        payload: { date: '2023-12-25', guests: 5 },
        };
        const newState = bookingReducer(initialBooking, action);
        expect(newState.reservationInfo.date).toBe('2023-12-25');
        expect(newState.reservationInfo.guests).toBe(5);
    });

    it('should increment the step when NEXT_STEP action is dispatched', () => {
        const action = { type: 'NEXT_STEP' };
        const newState = bookingReducer(initialBooking, action);
        expect(newState.step).toBe(2);
    });

    it('should decrement the step when PREVIOUS_STEP action is dispatched', () => {
        const action = { type: 'PREVIOUS_STEP' };
        const state = { ...initialBooking, step: 2 };
        const newState = bookingReducer(state, action);
        expect(newState.step).toBe(1);
    });

    it('should reset to initialBooking when RESET action is dispatched', () => {
        const action = { type: 'RESET' };
        const state = { ...initialBooking, step: 2 };
        const newState = bookingReducer(state, action);
        expect(newState).toEqual(initialBooking);
    });
});
