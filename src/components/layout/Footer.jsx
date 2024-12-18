import { Box, Flex, Stack, Text, Link, Icon, Divider, Image } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTripadvisor } from "react-icons/fa";
import logoFooter from "../../assets/logo-footer.png";

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservation', href: '/reservation' },
    { name: 'Order Online', href: '/order-online' },
    { name: 'Login', href: '/login' },
];

const Footer = () => {
    return (
        <Box bg="primary.100" color="highlight.100" py={10}>
            <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="start"
                w="100%"
                mx="auto"
                px={{ base: 4, md: 8 }}
                gap={{base:4, md:1}}
            >
                {/* Column 1: Logo */}
                <Stack spacing={4} textAlign={{ base: "center", md: "center" }}  mx="auto">
                    <Box w="100%" textAlign="center">
                        <Image src={logoFooter} alt="Little Lemon Restaurant Logo" mx="auto" maxW="150px" />
                    </Box>
                </Stack>

                {/* Column 2: Navigation */}
                <Stack spacing={2} textAlign={{ base: "center", md: "left" }}  mx="auto">
                    <Text fontSize="lg" fontWeight="bold" fontFamily="Markazi Text" >
                        Navigation
                    </Text>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} _hover={{ color: "secondary.100" }}>
                            {link.name}
                        </Link>
                    ))}
                </Stack>

                {/* Column 3: Contact Info */}
                <Stack spacing={2} textAlign={{ base: "center", md: "left" }}  mx="auto">
                    <Text fontSize="lg" fontWeight="bold" fontFamily="Markazi Text" >
                        Contact Us
                    </Text>
                    <Text fontSize="sm">123 Green Street, New York, NY</Text>
                    <Text fontSize="sm">Phone: (123) 456-7890</Text>
                    <Text fontSize="sm">Email: info@example.com</Text>
                </Stack>

                {/* Column 4: Social Media */}
                <Stack spacing={4} textAlign={{ base: "center", md: "left" }}  mx="auto">
                    <Text fontSize="lg" fontWeight="bold" fontFamily="Markazi Text" >
                        Follow Us
                    </Text>
                    <Flex justify={{ base: "center", md: "flex-start" }} gap={4}>
                        <Link href="https://www.instagram.com/" isExternal aria-label="Follow us on Instagram">
                            <Icon as={FaInstagram} boxSize={6} _hover={{ color: "secondary.100"  }}/>
                        </Link>
                        <Link href="https://www.facebook.com/" isExternal aria-label="Follow us on Facebook">
                            <Icon as={FaFacebook} boxSize={6} _hover={{ color: "secondary.100"  }}/>
                        </Link>
                        <Link href="https://tripadvisor.com" isExternal aria-label="Follow us on TripAdvisor">
                            <Icon as={FaTripadvisor} boxSize={6} _hover={{ color: "secondary.100"  }}/>
                        </Link>
                    </Flex>
                </Stack>
            </Flex>
            {/* Divider and Extra Footer Info */}
            <Divider my={4} borderColor="whiteAlpha.400" />
            <Text fontSize="xs" textAlign="center" mt={2}>
                © 2024 Little Lemon. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;
