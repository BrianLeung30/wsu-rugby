import {
  Box,
  Container,
  Heading,
  Input,
  VStack,
  Select,
} from "@chakra-ui/react";
import React from "react";

const EditRoster = () => {
  const [newPlayer, setNewPlayer] = React.useState({
    name: "",
    position: "",
    image: "",
  });

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
          Add Player
        </Heading>
        <Box w={"full"} bgColor={"gray.100"} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input
              placeholder="Jack Smith"
              name="name"
              type="text"
              value={newPlayer.name}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, name: e.target.value })
              }
            />
            <Input
              placeholder="Position"
              name="position"
              type="text"
              value={newPlayer.position}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, position: e.target.value })
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
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default EditRoster;
