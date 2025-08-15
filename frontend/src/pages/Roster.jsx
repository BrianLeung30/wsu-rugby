import React from "react";
import { Container, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { useEditRoster } from "../roster/player";
import PlayerCard from "../components/PlayerCard";

const Roster = () => {
  const { fetchPlayers, players } = useEditRoster();

  React.useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text fontSize="30" fontWeight="bold" textAlign="center">
          Roster
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
          {[...players]
            .sort((a, b) => a.number - b.number)
            .map((player) => (
              <PlayerCard key={player._id} player={player} />
            ))}
        </SimpleGrid>

        {players.length === 0 && (
          <Text fontSize="xl" textAlign="center" fontWeight="bold">
            No Players Available
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Roster;
