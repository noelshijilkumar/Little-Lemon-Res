import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const ReservationSummary = ({ basicInfo, reservationInfo }) => {
    return (
        <Box p={4} textAlign="center">
            <Heading size={{base:'md', md:'lg'}} mb={4}>
                Thank You for Your Reservation!
            </Heading>
            <VStack spacing={2}>
                <Text><strong>Name:</strong> {basicInfo.name}</Text>
                <Text><strong>Date:</strong> {reservationInfo.date}</Text>
                <Text><strong>Time:</strong> {reservationInfo.time}</Text>
                <Text><strong>Guests:</strong> {reservationInfo.guests}</Text>
                <Text><strong>Occasion:</strong> {reservationInfo.occasion}</Text>
                <Text><strong>Seating:</strong> {reservationInfo.seating}</Text>
                {reservationInfo.specialRequest && (
                    <Text><strong>Special Request:</strong> {reservationInfo.specialRequest}</Text>
                )}

                <Text>The reservesion info has been sent to your email. See you soon!</Text>
            </VStack>
        </Box>
    );
};

export default ReservationSummary;
