import { Button, Container, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4} bgColor={"#981e32"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <HStack>
          <Link to={"/"}>Home</Link>
          <Link to={"/schedule"}>Schedule</Link>
          <Link to={"/roster"}>Roster</Link>
          <Link to={"/about-us"}>About Us</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
          <Link to={"/edit-schedule"}>Edit Schedule</Link>
          <Link to={"/edit-roster"}>Edit Roster</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
