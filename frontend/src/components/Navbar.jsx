import { Button, Flex, HStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/roster", label: "Roster" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/edit-schedule", label: "Edit Schedule" },
  { to: "/edit-roster", label: "Edit Roster" },
];

const Navbar = () => {
  return (
    <Box
      w="100vw"
      bgGradient="linear(to-r, #981e32, #c72c48)"
      boxShadow="md"
      py={2}
      mb={4}
      position="relative"
      left="50%"
      right="50%"
      marginLeft="-50vw"
      marginRight="-50vw"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1140px"
        mx="auto"
        px={4}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontWeight="extrabold"
          fontSize="xl"
          color="#981e32"
          letterSpacing="wide"
          mr={8}
        >
          WSU Rugby
        </Text>
        <HStack spacing={4}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              as={Link}
              to={link.to}
              variant="ghost"
              color="black"
              _hover={{
                bg: "whiteAlpha.300",
                color: "#981e32",
                fontWeight: "bold",
              }}
              fontSize="md"
              px={4}
              py={2}
              borderRadius="md"
              transition="all 0.2s"
            >
              {link.label}
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
