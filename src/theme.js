import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: {
        100: "#495E57", // Primary Color (Dark Green)
        200: "#F4CE14", // Primary Highlight (Yellow)
        },
        secondary: {
        100: "#EE9972", // Secondary (Peach)
        200: "#FBDA8B", // Secondary (Light Peach)
        },
        highlight: {
        100: "#EDEFEE", // Highlight (Light Gray)
        200: "#333333", // Highlight (Dark Gray)
        },
        gradientPrimary:
        "linear-gradient(180deg, rgba(152, 196, 181, 0) 0.35%, #98C4B5 39.22%, #495E57 100%)",
    },
    fonts: {
        heading: "Markazi Text, serif", // Headlines
        body: "Karla, sans-serif", // Paragraphs
    },
    fontSizes: {
        xs: "0.875rem", // 14pt
        sm: "1rem", // 16pt (Paragraph Text)
        md: "1.125rem", // 18pt (Medium/Lead Text)
        lg: "1.25rem", // 20pt (Section Title)
        xl: "2.5rem", // 40pt (Regular)
        "2xl": "4rem", // 64pt (Display Title)
    },
    styles: {
        global: {
        body: {
            bg: "highlight.100", // Light gray background
            color: "primary.100", // Default text color
            fontSize: "sm",
            lineHeight: "1.5",
        },
        h1: {
            fontSize: "2xl",
            fontWeight: "medium",
        },
        h2: {
            fontSize: "xl",
            fontWeight: "bold",
        },
        h3: {
            fontSize: "lg",
            fontWeight: "bold",
            textTransform: "uppercase",
        },
        p: {
            fontSize: "sm",
        },
        },
    },
});

export default theme;
