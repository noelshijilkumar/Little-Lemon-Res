import { VStack, Stack, Box, Text } from "@chakra-ui/react";

/**
 * FullScreenSection component
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The content to display within the section
 * @param {boolean} props.isDarkBackground - Determines if the background is dark (for white text)
 */
const FullScreenSection = ({ children, isDarkBackground, title, titlePosition, titleColor, ...boxProps }) => {
    return (
        <VStack
            // Outer container for full width
            backgroundColor={boxProps.backgroundColor || "transparent"}
            color={isDarkBackground ? "highlight.100" : "primary.100"}
            w="100%"
            alignItems="center"
            py={8}
        >
            {/* Title Section */}
            {title && (
                <Box as="header" w="100%" textAlign={titlePosition} mb={8} px={4}>
                    <Text fontSize={{ base: '5xl', md: '5xl' }} fontWeight="700" fontFamily="Markazi Text" color={titleColor}>
                        {title}
                    </Text>
                </Box>
            )}

            <Stack
                // Responsive container for main content
                spacing={8}
                maxWidth="1280px"
                w="100%"
                alignItems={{ base: "center", md: "flex-start" }}
                px={4}
                {...boxProps}
            >
                {children}
            </Stack>
        </VStack>
    );
};

export default FullScreenSection;
