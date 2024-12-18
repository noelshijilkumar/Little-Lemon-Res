import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import ReviewCard from '../../components/ReviewCard';

describe('ReviewCard', () => {
    // Test 1: Render ReviewCard with provided data
    it('renders the review card with the provided review data', () => {
        const mockReview = {
            id: 1,
            rating: 4,
            image: "https://images.unsplash.com/photo-1692777525709-122dee20e577?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            username: "John Doe",
            comment: "Great experience! The food was amazing.",
        };

        render(<ReviewCard review={mockReview} />);

        // Check if the username is displayed
        expect(screen.getByText('John Doe')).toBeInTheDocument();

        // Check if the rating stars are displayed correctly
        const stars = screen.getAllByRole('img', { hidden: true }); // Querying for all img elements including SVGs
        const starIcons = stars.filter((star) => star.closest('svg')); // Filter out the non-icon images
        expect(starIcons).toHaveLength(5);
        expect(starIcons[0]).toHaveAttribute('aria-label', 'Star filled');
        expect(starIcons[3]).toHaveAttribute('aria-label', 'Star filled');
        expect(starIcons[4]).toHaveAttribute('aria-label', 'Star empty');

        // Check if the image is rendered correctly
        const imageElement = screen.getByAltText('John Doe');
        expect(imageElement).toHaveAttribute('src', mockReview.image);

        // Check if the comment is rendered
        expect(screen.getByText('Great experience! The food was amazing.')).toBeInTheDocument();
    });

    // Test 2: Rendering fallback values when data is missing
    it('renders fallback values when some review data is missing', () => {
        const mockReview = {
            id: 2,
            rating: 3,
            // Missing image, username, and comment
        };

        render(<ReviewCard review={mockReview} />);

        // Check that fallback username is displayed
        expect(screen.getByText('Anonymous')).toBeInTheDocument();

        // Check that fallback comment is displayed
        expect(screen.getByText('No comments provided.')).toBeInTheDocument();

        // Check if the image has the default URL
        const imageElement = screen.getByAltText('User Avatar');
        expect(imageElement).toHaveAttribute('src', 'https://images.unsplash.com/photo-1591291294701-4f651ddd3556?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    });


    // Test 3: Check if stars are correctly rendered based on the rating
    it('displays the correct number of filled stars based on the rating', () => {
        const mockReview = {
            id: 4,
            rating: 2, // Only two stars should be filled
            username: "Alice",
            comment: "Not great.",
        };

        render(<ReviewCard review={mockReview} />);

        // Check if only the first two stars are filled
        const stars = screen.getAllByRole('img');
        expect(stars[0]).toHaveAttribute('aria-label', 'Star filled');
        expect(stars[1]).toHaveAttribute('aria-label', 'Star filled');
        expect(stars[2]).toHaveAttribute('aria-label', 'Star empty');
        expect(stars[3]).toHaveAttribute('aria-label', 'Star empty');
        expect(stars[4]).toHaveAttribute('aria-label', 'Star empty');
    });
});