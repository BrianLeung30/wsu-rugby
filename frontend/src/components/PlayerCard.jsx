import React, { useState } from "react";
import { Box, VStack, Image, Text, Button, HStack } from "@chakra-ui/react";

const PlayerCard = ({ player, showControls, onDelete }) => {
  // determine whether to show edit/delete controls:
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isEditPage =
    typeof showControls !== "undefined"
      ? showControls
      : pathname.includes("edit-roster") || pathname.includes("edit");

  // edit/delete handlers (delete implemented)
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleEdit = (id) => {
    // TODO: implement edit handler - receives the card's _id
  };

  const handleDelete = async (id) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this player?")) return;

    // If a parent passed an onDelete handler, delegate deletion to it
    if (typeof onDelete === "function") {
      try {
        setIsDeleting(true);
        await onDelete(id);
      } finally {
        setIsDeleting(false);
      }
      return;
    }

    // Otherwise perform the delete request here
    try {
      setIsDeleting(true);
      const res = await fetch(`/api/players/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to delete player");
      }

      // hide the card locally on success
      setIsRemoved(true);
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete player. See console for details.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isRemoved) return null;

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

        {/* show edit/delete only on the edit roster page */}
        {isEditPage && (
          <HStack spacing={3} w="100%" justify="center">
            <Button
              size="sm"
              colorScheme="blue"
              onClick={() => handleEdit(player._id)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => handleDelete(player._id)}
              isLoading={isDeleting}
              loadingText="Deleting"
            >
              Delete
            </Button>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default PlayerCard;
