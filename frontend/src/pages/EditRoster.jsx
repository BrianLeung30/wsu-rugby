import {
  Box,
  Container,
  Heading,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useEditRoster } from "../roster/player";

const EditRoster = () => {
  const [newPlayer, setNewPlayer] = React.useState({
    name: "",
    number: "",
    image: "",
  });

  const { createPlayer } = useEditRoster();

  const handleAddPlayer = async () => {
    const { success, message } = await createPlayer(newPlayer);
    console.log("Success:", success);
    console.log("Message:", message);
    if (!success) {
    } else {
    }
    setNewPlayer({ name: "", number: "", image: "" });
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
      </VStack>
    </Container>
  );
};

export default EditRoster;
