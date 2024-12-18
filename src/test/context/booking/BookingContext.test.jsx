import { render, screen,fireEvent  } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useContext } from 'react';
import { BookingContext, BookingProvider } from '../../../context/booking/BookingContext';

// Create a Test Component to use the context
const TestComponent = () => {
    const { state, dispatch } = useContext(BookingContext);

    return (
        <div>
        <p data-testid="step">Step: {state.step}</p>
        <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>
            Next Step
        </button>
        </div>
    );
};

describe('BookingContext', () => {
    it('should provide the initial state', () => {
        render(
        <BookingProvider>
            <TestComponent />
        </BookingProvider>
        );

        const stepElement = screen.getByTestId('step');
        expect(stepElement.textContent).toBe('Step: 1');
    });

    it('should allow state updates through dispatch', () => {
        render(
        <BookingProvider>
            <TestComponent />
        </BookingProvider>
        );

         // Click the "Next Step" button
        const button = screen.getByText('Next Step');
        fireEvent.click(button);

         // After the dispatch, the step should be updated to 2
        const stepElement = screen.getByTestId('step');
        expect(stepElement.textContent).toBe('Step: 2');
    });
});
