import React from "react";
import Navigation from "../components/Navigation";
import { Box, Heading } from "@chakra-ui/react";

const Slots = () => {
  return (
    <>
      <Navigation />
      <Box p={4}>
        <Heading>Our Slot Games</Heading>
        {/* Slot games content will be added here */}
      </Box>
    </>
  );
};

export default Slots;
