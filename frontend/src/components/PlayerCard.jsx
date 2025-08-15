import { Box, VStack, Image, Text } from "@chakra-ui/react";

const PlayerCard = ({ player }) => {
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      w="320px"
      mx="auto"
      p={6}
      m={4} // <-- add margin around each card
    >
      <VStack spacing={6} align="center" justify="center" w="100%" py={4}>
        <Image
          src={player.image || "/default-player.png"}
          alt={player.name + " photo"}
          w="180px"
          h="180px"
          objectFit="cover"
          rounded="md"
          mx="auto"
        />
        <Text fontWeight="bold" fontSize="xl" textAlign="center" w="100%">
          {player.name}
        </Text>
        <Text fontSize="lg" color="gray.500" textAlign="center" w="100%">
          #{player.number}
        </Text>
      </VStack>
    </Box>
  );
};

export default PlayerCard;
