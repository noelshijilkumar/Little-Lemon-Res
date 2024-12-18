
import { Box, Flex, Heading, Button  } from '@chakra-ui/react'
import FullScreenSection from '../components/layout/FullScreenSection';
import FaqList from '../components/FaqList';
import MenuItemCard from '../components/MenuItemCard';
import BookingForm from "../components/booking/BookingForm";
import faqData from '../data/faq';
import menu from '../data/menu';
import { Link } from 'react-router-dom';


function Reservation() {
    return (
        <>
            {/* Booking */}
            <FullScreenSection
                backgroundColor="primary.100"
                isDarkBackground={true}
                my={12}
                direction="column"
                alignItems='center'
                width='100%'
            >
                <Box maxW={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }} color='highlight.200'>
                    <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" mb={2} color='highlight.100'>
                        Reserve a table at
                    </Heading>
                    <Heading as="h2" fontSize={{ base: 'lg'}}  mb={4}  color='secondary.200'>
                        Little Lemon - Chicago
                    </Heading>
                </Box>
                <BookingForm />
            </FullScreenSection>
            {/* Menu preview */}
            <FullScreenSection
                backgroundColor="highlight.100"
                isDarkBackground={false}
                my={12}
                direction="column"
            >
                <Flex minWidth='100%' alignItems='center' justifyContent='space-between'  direction={{ base: "column", md: "row" }} gap='2'>
                    <Box p='2'>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" mb={2}>
                            Some of our popular dishes
                        </Heading>
                    </Box>
                    <Box gap='2'>
                        <Button  as={Link} to="/menu" bg="primary.200" color='primary.100' size="lg" _hover={{ bg:'secondary.100' }}>
                                View Menu
                        </Button>
                    </Box>
                </Flex>
                <Flex minWidth='100%' alignItems='center' justifyContent='space-evenly'  direction={{ base: "column", md: "row" }} gap='2'>
                    {menu.map((item) => (
                        <MenuItemCard key={item.id} menuItem={item} hideCTA={true}/>
                    ))}
                </Flex>
            </FullScreenSection>
            {/* FAQ */}
            <FullScreenSection
                backgroundColor="highlight.100"
                isDarkBackground={false}
                my={12}
                direction="column"
                alignItems="center"
            >
                <Flex
                    direction={{ base: 'column', md: 'row'}}
                    alignItems='center' justifyContent='space-evenly'
                    gap={8}
                    width='100%'
                >
                    <Box maxW={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }} color='highlight.200'>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" mb={2} color='primary.100'>
                            FAQs
                        </Heading>
                        <Heading as="h2" fontSize={{ base: 'l', md: 'xl' }}  mb={4}>
                            View any frequence question
                        </Heading>
                    </Box>
                    <FaqList data={faqData} />
                </Flex>
            </FullScreenSection>
        </>
    );
}

export default Reservation;