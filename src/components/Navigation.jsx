import React from "react";
import { Flex, Box, Spacer, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGamepad, FaHome } from "react-icons/fa";

const NavItem = ({ to, icon, children }) => (
  <Link to={to}>
    <Button leftIcon={icon} colorScheme="teal" variant="solid" ml={2}>
      {children}
    </Button>
  </Link>
);

const Navigation = () => {
  return (
    <Flex mb={6}>
      <Box p="2">
        <Heading size="md">Online Slots Casino</Heading>
      </Box>
      <Spacer />
      <NavItem to="/" icon={<FaHome />}>
        Home
      </NavItem>
      <NavItem to="/slots" icon={<FaGamepad />}>
        Play Slots
      </NavItem>
    </Flex>
  );
};

export default Navigation;
