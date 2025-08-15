import {
  Box,
  Container,
  Heading,
  Input,
  VStack,
  Button,
  Checkbox,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEditSchedule } from "../schedule/game";
import GameCard from "../components/GameCard";

const EditSchedule = () => {
  const [newGame, setNewGame] = React.useState({
    opponent: "",
    date: "",
    isHomeGame: true,
    location: "",
    logo: "",
  });

  const { createGame, games, fetchGames, deleteGame } = useEditSchedule();

  React.useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  const handleAddGame = async () => {
    const { success, message } = await createGame(newGame);
    console.log("Success:", success);
    console.log("Message:", message);
    setNewGame({
      opponent: "",
      date: "",
      isHomeGame: true,
      location: "",
      logo: "",
    });
    fetchGames(); // refresh list after adding
  };

  // New: delete handler for Edit Schedule page
  const handleDelete = async (gid) => {
    const { success, message } = await deleteGame(gid);
    console.log("Delete:", success, message);
    if (success) {
      fetchGames();
    }
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
          Add Game
        </Heading>
        <Box w={"full"} bgColor={"gray.100"} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4} align="flex-start">
            <Input
              placeholder="Opponent"
              name="opponent"
              type="text"
              value={newGame.opponent}
              onChange={(e) =>
                setNewGame({ ...newGame, opponent: e.target.value })
              }
            />
            <Input
              name="date"
              type="datetime-local"
              value={newGame.date}
              onChange={(e) => setNewGame({ ...newGame, date: e.target.value })}
            />
            <Input
              placeholder="Opponent Logo URL"
              name="logo"
              type="text"
              value={newGame.logo}
              onChange={(e) => setNewGame({ ...newGame, logo: e.target.value })}
            />
            <Input
              placeholder="Location"
              name="location"
              type="text"
              value={newGame.location}
              onChange={(e) =>
                setNewGame({ ...newGame, location: e.target.value })
              }
            />
            <Checkbox.Root
              name="isHomeGame"
              type="checkbox"
              checked={newGame.isHomeGame}
              onCheckedChange={(e) =>
                setNewGame({ ...newGame, isHomeGame: e.checked })
              }
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Playing at Home</Checkbox.Label>
            </Checkbox.Root>
            <Button onClick={handleAddGame} w="full">
              Add Game
            </Button>
          </VStack>
        </Box>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt={8}>
          Current Schedule
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
          {[...games]
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((game) => (
              <GameCard
                key={game._id}
                game={game}
                // pass the delete handler down; GameCard will call it with the game._id
                onDelete={handleDelete}
              />
            ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default EditSchedule;
