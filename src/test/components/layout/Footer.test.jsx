import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../../../components/layout/Footer';

describe('Footer', () => {
    it('renders the footer component', () => {
        render(<Footer />);
    
        // Check if logo is displayed
        const logoImage = screen.getByAltText(/Little Lemon Restaurant Logo/i);
        expect(logoImage).toBeInTheDocument();
    
        // Check if the navigation links are displayed with correct href attributes
        const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Menu', href: '/menu' },
        { name: 'Reservation', href: '/reservation' },
        { name: 'Order Online', href: '/order-online' },
        { name: 'Login', href: '/login' }
        ];
    
        navLinks.forEach((link) => {
        const linkElement = screen.getByText(link.name);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link.href); // Check for exact match
        });
    
        // Check contact information
        expect(screen.getByText(/123 Green Street, New York, NY/i)).toBeInTheDocument();
        expect(screen.getByText(/Phone: \(123\) 456-7890/i)).toBeInTheDocument();
        expect(screen.getByText(/Email: info@example.com/i)).toBeInTheDocument();
    
        // Check the social media icons
        const instagramLink = screen.getByLabelText(/Follow us on Instagram/i);
        const facebookLink = screen.getByLabelText(/Follow us on Facebook/i);
        const tripadvisorLink = screen.getByLabelText(/Follow us on TripAdvisor/i);
    
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/');
        expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/');
        expect(tripadvisorLink).toHaveAttribute('href', 'https://tripadvisor.com');
    
    
        // Check if the divider and copyright text are rendered
        const divider = screen.getByRole('separator');
        expect(divider).toBeInTheDocument();
    
        const copyrightText = screen.getByText(/© 2024 Little Lemon. All rights reserved./i);
        expect(copyrightText).toBeInTheDocument();
    });
});
