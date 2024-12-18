import { FaStar } from "react-icons/fa";
import { Box, Flex, Text, Image, Icon  } from '@chakra-ui/react';


function ReviewCard({review}) {
    return (
        <Box
            key={review.id}
            bg="highlight.100"
            p={4}
            borderRadius="8px"
            boxShadow="md"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
                transform: "scale(1.05)",
                boxShadow: "lg",
            }}
            mx='auto'
        >
        {/* Rating */}
        <Flex mb={4} aria-label={`Rating: ${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, index) => (
                <Icon
                    as={FaStar}
                    key={index}
                    color={index < Math.min(review.rating, 5) ? "yellow.400" : "gray.300"}
                    boxSize={4}
                    role="img"
                    aria-label={index < review.rating ? "Star filled" : "Star empty"}
                />
            ))}
        </Flex>

        {/* Body */}
        <Flex align="center" mb={4}>
            <Image
            src={review.image || 'https://images.unsplash.com/photo-1591291294701-4f651ddd3556?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            alt={review.username || 'User Avatar'}
            boxSize="80px"
            borderRadius="8px"
            mr={4}
            />
            <Text fontWeight="bold" color="highlight.200">{review.username || 'Anonymous'}</Text>
        </Flex>

        {/* Footer */}
        <Text fontSize="sm" color="highlight.200">
            {review.comment || 'No comments provided.'}
        </Text>
    </Box>
    );
}

export default ReviewCard;