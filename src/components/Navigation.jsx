import React from "react";
import { Flex, Box, Spacer, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

const Navigation = () => {
  return (
    <Flex mb={6}>
      <Box p="2">
        <Heading size="md">Online Slots Casino</Heading>
      </Box>
      <Spacer />
      <Link to="/">
        <Button colorScheme="teal" variant="solid">
          Home
        </Button>
      </Link>
      <Link to="/slots">
        <Button leftIcon={<FaGamepad />} colorScheme="teal" variant="solid" ml={2}>
          Play Slots
        </Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
