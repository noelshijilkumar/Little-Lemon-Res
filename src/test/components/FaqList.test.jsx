import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FaqList from '../../components/FaqList';
import { describe, it, expect } from 'vitest';

describe('FaqList', () => {
    // Test 1: Render with valid data
    it('renders FAQ items correctly', () => {
        const mockData = [
            {
                id: 1,
                question: "How can I make a reservation?",
                answer: "You can make a reservation online through our website or by calling us directly at (555) 123-4567.",
            },
            {
                id: 2,
                question: "Do you accept walk-ins?",
                answer: "Yes, we accept walk-ins, but we recommend making a reservation to guarantee your spot, especially during peak hours.",
            }
        ];

        render(<FaqList data={mockData} />);

        // Ensure FAQ questions and answers are rendered
        expect(screen.getByText('How can I make a reservation?')).toBeInTheDocument();
        expect(screen.getByText('Do you accept walk-ins?')).toBeInTheDocument();
        expect(screen.getByText('You can make a reservation online through our website or by calling us directly at (555) 123-4567.')).toBeInTheDocument();
        expect(screen.getByText('Yes, we accept walk-ins, but we recommend making a reservation to guarantee your spot, especially during peak hours.')).toBeInTheDocument();
    });

    // Test 2: Handle empty data (or invalid data)
    it('displays a message when no data is available', () => {
        render(<FaqList data={[]} />);

        // Expect to see the fallback message when no FAQs are available
        expect(screen.getByText('No FAQs available at this time.')).toBeInTheDocument();
    });

    // Test 3: Handle invalid data (e.g., non-array or undefined)
    it('displays a message when invalid data is passed', () => {
        render(<FaqList data={null} />);

        // Expect to see the fallback message when invalid data is passed
        expect(screen.getByText('No FAQs available at this time.')).toBeInTheDocument();
    });

    // Test 4: Check accordion behavior (expand and collapse)
    it('toggles FAQ accordion when clicked', async () => {
        const mockData = [
            {
                id: 1,
                question: "How can I make a reservation?",
                answer: "You can make a reservation online through our website or by calling us directly at (555) 123-4567.",
            }
        ];

        render(<FaqList data={mockData} />);

        const questionElement = screen.getByText('How can I make a reservation?');
        const answerElement = screen.getByText('You can make a reservation online through our website or by calling us directly at (555) 123-4567.');

        // Initially, the answer should not be visible
        expect(answerElement).not.toBeVisible();

        // Click the question to toggle the accordion
        fireEvent.click(questionElement);
        await waitFor(() => {
            expect(answerElement).toBeVisible();
        });

        // Click again to collapse the answer
        fireEvent.click(questionElement);
        await waitFor(() => {
            expect(answerElement).not.toBeVisible();
        });
    });

});
