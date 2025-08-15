import {
  Box,
  Container,
  Heading,
  Input,
  VStack,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useEditRoster } from "../roster/player";
import PlayerCard from "../components/PlayerCard";

const EditRoster = () => {
  const [newPlayer, setNewPlayer] = React.useState({
    name: "",
    number: "",
    image: "",
  });

  const { createPlayer, players, fetchPlayers } = useEditRoster();

  React.useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  const handleAddPlayer = async () => {
    const { success, message } = await createPlayer(newPlayer);
    console.log("Success:", success);
    console.log("Message:", message);
    setNewPlayer({ name: "", number: "", image: "" });
    fetchPlayers(); // refresh list after adding
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
          Add Player
        </Heading>
        <Box w={"full"} bgColor={"gray.100"} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input
              placeholder="Name"
              name="name"
              type="text"
              value={newPlayer.name}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, name: e.target.value })
              }
            />
            <Input
              placeholder="Position Number"
              name="number"
              type="number"
              min={1}
              max={15}
              value={newPlayer.number}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, number: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              type="text"
              value={newPlayer.image}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, image: e.target.value })
              }
            />
            <Button onClick={handleAddPlayer} w="full">
              Add Player
            </Button>
          </VStack>
        </Box>

        {/* Player cards below add player section */}
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt={8}>
          Current Roster
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

export default EditRoster;
