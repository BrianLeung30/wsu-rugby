import { Container, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useEditSchedule } from "../schedule/game";
import GameCard from "../components/GameCard";

const Schedule = () => {
  const { fetchGames, games } = useEditSchedule();
  React.useEffect(() => {
    fetchGames();
  }, [fetchGames]);
  console.log("Games", games);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"} fontWeight={"bold"} textAlign={"center"}>
          Schedule
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {[...games]
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
        </SimpleGrid>

        {games.length === 0 && (
          <Text fontSize="xl" textAlign={"center"} fontWeight="bold">
            No Scheduled Games Available
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Schedule;
