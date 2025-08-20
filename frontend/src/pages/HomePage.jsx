import React from "react";
import { VStack, Image, HStack, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <VStack w="100vw" m={0} p={0} spacing={0}>
      <HStack w="100%" maxW="100vw" spacing={0} align="stretch" m={0} p={0}>
        <Box position="relative" flex="1" w="50%" h="60vh">
          <Image
            src="/Rugby Ball.jpeg"
            alt="Rugby ball"
            objectFit="cover"
            w="100%"
            h="100%"
            display="block"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="rgba(0,0,0,0.5)"
            color="white"
            borderRadius="0"
            textAlign="center"
            px={6}
          >
            <Link
              to={"/about-us"}
              fontSize="lg"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              <Text
                display="block"
                w="92%" // make text container almost full width
                maxW="96%"
                textAlign="center"
                lineHeight="1"
                whiteSpace="normal"
                fontWeight="extrabold"
                fontSize="clamp(20px, 6vw, 88px)" // scales with container/viewport
                overflow="hidden"
                textOverflow="ellipsis"
                transition={"all 0.3s"}
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
              >
                Washington State University Rugby
              </Text>
            </Link>
          </Box>
        </Box>

        <Box position="relative" flex="1" w="50%" h="60vh">
          <Image
            src="/Player.jpeg"
            alt="Rugby player"
            objectFit="cover"
            w="100%"
            h="100%"
            display="block"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="rgba(0,0,0,0.5)"
            color="white"
            borderRadius="0"
            textAlign="center"
            px={6}
          >
            <Link
              to="/contact-us"
              fontSize="lg"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              <Text
                display="block"
                w="92%" // make text container almost full width
                maxW="96%"
                textAlign="center"
                lineHeight="1"
                whiteSpace="normal"
                fontWeight="extrabold"
                fontSize="clamp(20px, 6vw, 88px)" // scales with container/viewport
                overflow="hidden"
                textOverflow="ellipsis"
                transition={"all 0.3s"}
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
              >
                Join Us!
              </Text>
            </Link>
          </Box>
        </Box>
      </HStack>
      <HStack w="100%" maxW="100vw" spacing={0} align="stretch" m={0} p={0}>
        <Box position="relative" flex="1" w="50%" h="60vh">
          <Image
            src="/Rugby Ball.jpeg"
            alt="Rugby ball"
            objectFit="cover"
            w="100%"
            h="100%"
            display="block"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="rgba(0,0,0,0.5)"
            color="white"
            borderRadius="0"
            textAlign="center"
            px={6}
          >
            <Link
              to={"/schedule"}
              fontSize="lg"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              <Text
                display="block"
                w="92%" // make text container almost full width
                maxW="96%"
                textAlign="center"
                lineHeight="1"
                whiteSpace="nowrap"
                fontWeight="extrabold"
                fontSize="clamp(20px, 6vw, 88px)" // scales with container/viewport
                overflow="visible"
                textOverflow="ellipsis"
                transition={"all 0.3s"}
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
              >
                Schedule
              </Text>
            </Link>
          </Box>
        </Box>

        <Box position="relative" flex="1" w="50%" h="60vh">
          <Image
            src="/Player.jpeg"
            alt="Rugby player"
            objectFit="cover"
            w="100%"
            h="100%"
            display="block"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="rgba(0,0,0,0.5)"
            color="white"
            borderRadius="0"
            textAlign="center"
            px={6}
          >
            <Link
              to="/roster"
              fontSize="lg"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              <Text
                display="block"
                w="92%" // make text container almost full width
                maxW="96%"
                textAlign="center"
                lineHeight="1"
                whiteSpace="nowrap"
                fontWeight="extrabold"
                fontSize="clamp(20px, 6vw, 88px)" // scales with container/viewport
                overflow="visible"
                textOverflow="ellipsis"
                transition={"all 0.3s"}
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
              >
                Roster
              </Text>
            </Link>
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
};

export default HomePage;
