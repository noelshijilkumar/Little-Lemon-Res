import { render, screen } from '@testing-library/react';
import Header from '../../../components/layout/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
    it('renders logo correctly', () => {
        render(
        <ChakraProvider>
            <Header />
        </ChakraProvider>
        );
        // Check if the logo is rendered
        const logo = screen.getByAltText('Little Lemon logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
        <ChakraProvider>
            <Header />
        </ChakraProvider>
        );

        // Check if the navigation links are visible
        const links = ['Home', 'About', 'Menu', 'Reservation', 'Order Online', 'Login'];
        links.forEach(linkText => {
        expect(screen.getByText(linkText)).toBeInTheDocument();
        });
    });

    it('shows the cart icon', () => {
        render(
        <ChakraProvider>
            <Header />
        </ChakraProvider>
        );

        // Ensure cart icon is visible
        const cartIcon = screen.getByLabelText('Shopping Cart');
        expect(cartIcon).toBeInTheDocument();
    });

});
