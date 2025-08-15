import { Box, Image, HStack, VStack, Text } from "@chakra-ui/react";
const GameCard = ({ game }) => {
  const dateObj = game?.date ? new Date(game.date) : null;
  const formattedDate =
    dateObj && !isNaN(dateObj)
      ? new Intl.DateTimeFormat(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }).format(dateObj)
      : game?.date ?? "";

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      margin={3}
      padding={3}
    >
      <HStack>
        {game.isHomeGame ? (
          <>
            {/* WSU first */}
            <VStack>
              <Image
                src={"/Cougar Head.svg"}
                alt={"WSU logo"}
                w={"48"}
                h={"auto"}
                objectFit={"contain"}
              />
              <Text
                fontSize={"sm"}
                color={"gray.500"}
                textAlign="center"
                w="100%"
              >
                {"Washington State University"}
              </Text>
            </VStack>
            <VStack>
              <Text fontWeight={"bold"} textAlign="center" w="100%">
                {game.location}
              </Text>
              <Text
                fontSize={"sm"}
                color={"gray.500"}
                textAlign="center"
                w="100%"
              >
                {formattedDate}
              </Text>
            </VStack>
            <VStack>
              <Image
                src={game.logo}
                alt={game.opponent + " logo"}
                w={"48"}
                h={"auto"}
                objectFit={"contain"}
              />
              <Text
                fontSize={"sm"}
                color={"gray.500"}
                textAlign="center"
                w="100%"
              >
                {game.opponent}
              </Text>
            </VStack>
          </>
        ) : (
          <>
            {/* Opponent first */}
            <VStack>
              <Image
                src={game.logo}
                alt={game.opponent + " logo"}
                w={"48"}
                h={"auto"}
                objectFit={"contain"}
              />
              <Text
                fontSize={"sm"}
                color={"gray.500"}
                textAlign="center"
                w="100%"
              >
                {game.opponent}
              </Text>
            </VStack>
            <VStack>
              <Text fontWeight={"bold"} textAlign="center" w="100%">
                {game.location}
              </Text>
              <Text
                fontSize={"sm"}
                color={"gray.500"}
                textAlign="center"
                w="100%"
              >
                {formattedDate}
              </Text>
            </VStack>
            <VStack>
              <Image
                src={"/Cougar Head.svg"}
                alt={"WSU logo"}
                w={"48"}
                h={"auto"}
                objectFit={"contain"}
              />
              <Text
                fontSize={"sm"}
                color={"gray.500"}
                textAlign="center"
                w="100%"
              >
                {"Washington State University"}
              </Text>
            </VStack>
          </>
        )}
      </HStack>
    </Box>
  );
};

export default GameCard;
