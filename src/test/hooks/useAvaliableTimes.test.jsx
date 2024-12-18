import { render, screen } from '@testing-library/react';
import { useAvailableTimes } from '../../hooks/useAvailableTimes';
import { BookingContext } from '../../context/booking/BookingContext';
import { describe, it, expect } from 'vitest';


const HookWrapper = ({ selectedDate }) => {
  const { availableTimes, loadingTime, error } = useAvailableTimes(selectedDate);
  if (loadingTime) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <ul>{availableTimes.map((time, index) => <li key={index}>{time}</li>)}</ul>;
};

describe('useAvailableTimes', () => {
  it('should display available times', async () => {
    render(
      <BookingContext.Provider value={{ state: { availableTimes: ['17:00', '17:30'] }, dispatch: () => {} }}>
        <HookWrapper selectedDate="2024-12-10" />
      </BookingContext.Provider>
    );

    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('17:30')).toBeInTheDocument();
  });
});
