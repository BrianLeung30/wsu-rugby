import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Box
      maxW="600px"
      mx="auto"
      p={{ base: 4, md: 8 }}
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      mt={8}
    >
      <Heading as="h1" size="xl" textAlign="center" mb={6} color="red.700">
        Contact Us
      </Heading>
      <VStack align="stretch" spacing={6}>
        <Box>
          <Heading as="h2" size="md" color="red.500" mb={2}>
            Coach
          </Heading>
          <Text fontWeight="bold">Name: John Smith</Text>
          <Text>
            Email:{" "}
            <Link href="mailto:john.smith@wsu.edu" color="red.600">
              john.smith@wsu.edu
            </Link>
          </Text>
          <Text>
            Phone:{" "}
            <Link href="tel:5095551234" color="red.600">
              (509) 555-1234
            </Link>
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="md" color="red.500" mb={2}>
            Club President
          </Heading>
          <Text fontWeight="bold">Name: Jack Johnson</Text>
          <Text>
            Email:{" "}
            <Link href="mailto:jack.johnson@wsu.edu" color="red.600">
              jack.johnson@wsu.edu
            </Link>
          </Text>
          <Text>
            Phone:{" "}
            <Link href="tel:5095555678" color="red.600">
              (509) 555-5678
            </Link>
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="md" color="red.500" mb={2}>
            Instagram
          </Heading>
          <HStack>
            <Icon as={FaInstagram} color="red.500" boxSize={6} />
            <Link
              href="https://instagram.com/wsu_rugby"
              color="red.600"
              isExternal
            >
              @wsu_rugby
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactUs;
