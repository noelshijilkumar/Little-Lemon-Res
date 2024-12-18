import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Image,
  } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FullScreenSection from "../components/layout/FullScreenSection";
import ReviewCard from "../components/ReviewCard";
import MenuItemCard from "../components/MenuItemCard";
import restaurantFoodImg from "../assets/restauranfood.jpg";
import aboutImage from "../assets/about.webp";
import reviews from "../data/reviews";
import menu from "../data/menu";

// Motion wrapper for Chakra components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function Home() {
    return (
      <>
        {/* Hero Section */}
        <MotionBox
          bg="primary.100"
          py={16}
          px={4}
          width="100%"
          height={{ base: "auto", md: "500px" }}
          mb={8}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-evenly"
            align="center"
            gap={8}
          >
            {/* Left Column: Text Content */}
            <MotionBox
              maxW={{ base: "100%", md: "50%" }}
              textAlign={{ base: "center", md: "left" }}
              color="highlight.100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="bold"
                mb={2}
              >
                Little Lemon
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "l", md: "xl" }}
                fontWeight="bold"
                mb={4}
              >
                Chicago
              </Heading>
              <Text fontSize={{ base: "md", md: "l" }} mb={6}>
                We are a family-owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </Text>
              <Button
                as={Link}
                to="/reservation"
                bg="primary.200"
                color="primary.100"
                size="lg"
                _hover={{ bg: "secondary.100" }}
                mt={6}
              >
                Reserve a Table
              </Button>
            </MotionBox>

            {/* Right Column: Image */}
            <MotionBox
              maxW={{ base: "300px", md: "360px" }}
              borderRadius="8px"
              overflow="hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image
                src={restaurantFoodImg}
                alt="Little Lemon Dining"
                objectFit="cover"
                borderRadius="8px"
                boxShadow="md"
              />
            </MotionBox>
          </Flex>
        </MotionBox>
  
        {/* Specials Section */}
        <FullScreenSection
          backgroundColor="highlight.100"
          isDarkBackground={false}
          my={12}
          direction="column"
        >
          <MotionFlex
            minWidth="100%"
            alignItems="center"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            gap="2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="bold"
                mb={2}
              >
                This Week Specials!
              </Heading>
              <Text fontSize="md" color="gray.600">
                Explore some of our most popular dishes, carefully crafted with
                fresh ingredients.
              </Text>
            </Box>
            <Box>
              <Button
                as={Link}
                to="/menu"
                bg="primary.200"
                color="primary.100"
                size="lg"
                _hover={{ bg: "secondary.100" }}
              >
                Order Online
              </Button>
            </Box>
          </MotionFlex>
          <MotionFlex
            minWidth="100%"
            alignItems="center"
            justifyContent="space-evenly"
            direction={{ base: "column", md: "row" }}
            gap="2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {menu.slice(0, 4).map((item) => (
              <MenuItemCard key={item.id} menuItem={item} hideCTA={false} />
            ))}
          </MotionFlex>
        </FullScreenSection>
  
        {/* Testimonials Section */}
        <FullScreenSection
          backgroundColor="primary.100"
          title="Testimonials"
          isDarkBackground
          titlePosition="center"
          titleColor="highlight.100"
          direction="column"
        >
          <MotionFlex
            justifyContent="center"
            wrap="wrap"
            gap={8}
            maxW="100%"
            mx="auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {reviews.slice(0, 4).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </MotionFlex>
        </FullScreenSection>
  
        {/* About Section */}
        <FullScreenSection
          backgroundColor="highlight.100"
          isDarkBackground={false}
          direction="column"
        >
          <MotionFlex
            direction={{ base: "column", md: "row" }}
            justify="space-evenly"
            align="center"
            gap={8}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Box
              maxW={{ base: "100%", md: "50%" }}
              textAlign={{ base: "center", md: "left" }}
              color="highlight.200"
            >
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="bold"
                mb={2}
                color="primary.100"
              >
                About Us
              </Heading>
              <Text fontSize="md" color="gray.600" mb={6}>
                Little Lemon is a family-owned Mediterranean restaurant that
                blends tradition with a modern twist. Experience an array of
                authentic dishes crafted with the finest ingredients.
              </Text>
              <Button
                as={Link}
                to="/about"
                bg="primary.200"
                color="primary.100"
                size="lg"
                _hover={{ bg: "secondary.100" }}
              >
                Learn More
              </Button>
            </Box>
            <Box
              maxW={{ base: "90%", md: "30%" }}
              borderRadius="8px"
              overflow="hidden"
            >
              <Image
                src={aboutImage}
                alt="About Little Lemon"
                objectFit="cover"
                borderRadius="8px"
                boxShadow="md"
              />
            </Box>
          </MotionFlex>
        </FullScreenSection>
      </>
    );
  }
  
  export default Home;
  