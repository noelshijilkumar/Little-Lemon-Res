import { Box, Text, Image, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import underDevImg from "../assets/chef_underdev.svg";

const UnderDevPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="100vh"
      backgroundColor="highlight.100"
      px={{ base: 4, md: 8 }}
      my={12}
    >
      <VStack
        spacing={{ base: 4, md: 6 }}
        width="100%"
        maxW="500px"
        align="center"
        mb={5}
      >
        {/* Image */}
        <Image
          src={underDevImg}
          alt="Illustration of a chef and tools indicating a page under development"
          boxSize={{ base: "200px", md: "300px" }}
          objectFit="contain"
        />

        {/* Title */}
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="gray.700"
        >
          This Page is Under Development
        </Text>

        {/* Subtitle */}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.500"
          px={{ base: 2, md: 4 }}
        >
          We are working hard to bring this feature to you soon. Please check
          back later!
        </Text>

        {/* Button */}
        <Button
          aria-label="Return to Home Page"
          as={Link}
          to="/"
          bg="primary.200"
          color="primary.100"
          size={{ base: "md", md: "lg" }}
          px={{ base: 6, md: 8 }}
          _hover={{ bg: "secondary.100" }}
        >
          Go Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default UnderDevPage;
