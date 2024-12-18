import { Box, Image, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { FaBicycle } from 'react-icons/fa';

const MenuItemCard = ({ menuItem, hideCTA }) => {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="8px"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
                transform: "scale(1.05)",
                boxShadow: "lg",
            }}
        >
            {/* Image */}
            <Image
                src={menuItem.image || 'https://images.unsplash.com/photo-1485962093642-5f4386e84429?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt={menuItem.title || 'Menu item'}
                objectFit="cover"
                borderTopRadius="8px"
                w="100%"
                h="200px"
            />
            {/* Body */}
            <Box p={4} minHeight='140px'>
                {/* Title and Price */}
                <Flex justifyContent="space-between" alignItems="center" mb={2}>
                    <Heading as="h3" size="sm" color="primary.100">
                        {menuItem.title || 'Menu Item'}
                    </Heading>
                    <Text fontWeight="bold" color="secondary.100">
                        ${menuItem.price || '-'}
                    </Text>
                </Flex>
                {/* Description */}
                <Text fontSize='xs' color="highlight.200" mb={4}>
                    {menuItem.details || 'No description available.'}
                </Text>
            </Box>
            {/* Footer: Order Button */}
            {!hideCTA && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    pb={2}
                >
                    <Button
                        color="primary.100"
                        variant="ghost"
                        rightIcon={<Icon as={FaBicycle} />}
                        _hover={{ bg: 'secondary.200' }}
                        aria-label={`Order delivery for ${menuItem.title}`}
                    >
                        Order a delivery
                    </ Button>
                </Box>
            )}
        </Box>
    );
};

export default MenuItemCard;
