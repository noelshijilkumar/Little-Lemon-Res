import { render, screen } from '@testing-library/react';
import FullScreenSection from '../../../components/layout/FullScreenSection';
import { ChakraProvider } from '@chakra-ui/react';
import { describe, it, expect } from 'vitest';

describe('FullScreenSection', () => {
    it('renders children correctly', () => {
        render(
            <ChakraProvider>
                <FullScreenSection title="Test Title" isDarkBackground={false}>
                    <div>Test Child</div>
                </FullScreenSection>
            </ChakraProvider>
        );

        expect(screen.getByText('Test Child')).toBeInTheDocument();
    });

    it('renders without title when title prop is not passed', () => {
        render(
            <ChakraProvider>
                <FullScreenSection isDarkBackground={false}>
                    <div>Test Child</div>
                </FullScreenSection>
            </ChakraProvider>
        );

        const titleElement = screen.queryByText('Test Title');
        expect(titleElement).not.toBeInTheDocument();
    });
});
