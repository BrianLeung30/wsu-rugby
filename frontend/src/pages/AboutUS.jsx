import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AboutUS = () => {
  return (
    <Box
      maxW="800px"
      mx="auto"
      p={{ base: 4, md: 8 }}
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
    >
      <Heading
        as="h1"
        size="2xl"
        textAlign="center"
        mb={8}
        color="red.700"
        fontWeight="extrabold"
      >
        About Us
      </Heading>
      <VStack align="stretch" spacing={8}>
        <Box>
          <Heading as="h2" size="lg" color="red.500" mb={2}>
            Mission Statement
          </Heading>
          <Text fontSize="lg" color="gray.700">
            The Washington State University Rugby Club is dedicated to promoting
            teamwork, sportsmanship, and personal growth through the sport of
            rugby. Our mission is to foster a supportive and competitive
            environment where all members can develop their skills and passion
            for the game.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="red.500" mb={2}>
            Team Culture
          </Heading>
          <Text fontSize="lg" color="gray.700">
            We pride ourselves on our inclusive and welcoming team culture.
            Players of all backgrounds and experience levels are encouraged to
            join. Our club values respect, commitment, and camaraderie both on
            and off the field.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="red.500" mb={2}>
            Membership Information
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Membership is open to all Washington State University students. No
            prior rugby experience is required—just a willingness to learn and
            be part of a team. To join, simply attend a practice or contact us
            for more details.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AboutUS;
