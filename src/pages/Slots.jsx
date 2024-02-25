import React from "react";
import Navigation from "../components/Navigation";
import { Box, Heading } from "@chakra-ui/react";

const Slots = () => {
  return (
    <>
      <Navigation />
      <Box p={4}>
        <Heading>Our Slot Games</Heading>
        <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading size="md" mb={4}>
            Coming Soon: Exciting Slot Games!
          </Heading>
          {/* Placeholder for slot games content */}
        </Box>
      </Box>
    </>
  );
};

export default Slots;
