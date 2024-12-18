import { render, screen } from '@testing-library/react';
import MenuItemCard from '../../components/MenuItemCard';
import { describe, it, expect } from 'vitest';

describe('MenuItemCard', () => {

    // Test 1: Check if the menu item card renders with valid data
    it('renders menu item card with data correctly', () => {
        const mockMenuItem = {
            title: 'Spaghetti',
            price: '12.99',
            details: 'Delicious spaghetti with tomato sauce.',
            image: 'https://example.com/spaghetti.jpg',
        };

        render(<MenuItemCard menuItem={mockMenuItem} hideCTA={false} />);

        // Check that the title, price, and description are rendered
        expect(screen.getByText('Spaghetti')).toBeInTheDocument();
        expect(screen.getByText('$12.99')).toBeInTheDocument();
        expect(screen.getByText('Delicious spaghetti with tomato sauce.')).toBeInTheDocument();

        // Check if the image is rendered correctly
        const imageElement = screen.getByAltText('Spaghetti');
        expect(imageElement).toHaveAttribute('src', 'https://example.com/spaghetti.jpg');

        // Check if the 'Order a delivery' button is rendered
        expect(screen.getByText('Order a delivery')).toBeInTheDocument();
    });

    // Test 2: Check fallback values when menuItem data is missing
    it('renders fallback values when menu item data is missing', () => {
        const mockMenuItem = {};

        render(<MenuItemCard menuItem={mockMenuItem} hideCTA={false} />);

        // Check that the fallback values are rendered
        expect(screen.getByText('Menu Item')).toBeInTheDocument();
        expect(screen.getByText('$-')).toBeInTheDocument();
        expect(screen.getByText('No description available.')).toBeInTheDocument();
        // Check if the default image is rendered
        const defaultImage = 'https://images.unsplash.com/photo-1485962093642-5f4386e84429?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        const imageElement = screen.getByAltText('Menu item');
        expect(imageElement).toHaveAttribute('src', defaultImage);
    });

    // Test 3: Check if the CTA button is not rendered when hideCTA is true
    it('does not render CTA button when hideCTA is true', () => {
        const mockMenuItem = {
        title: 'Pizza',
        price: '10.99',
        details: 'Delicious cheese pizza.',
        };

        render(<MenuItemCard menuItem={mockMenuItem} hideCTA={true} />);

        // Check that the CTA button is not rendered
        expect(screen.queryByText('Order a delivery')).toBeNull();
    });

});

