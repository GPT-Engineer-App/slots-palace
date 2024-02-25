import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { ChakraProvider, Box, VStack, FormControl, FormLabel, Input, Button, Heading, Text, Flex, Spacer, useToast } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaGamepad } from "react-icons/fa";

const API_URL = "https://backengine-1ked.fly.dev";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      // Implement token handling and storage (e.g., localStorage)
      toast({ title: "Login successful", status: "success", isClosable: true });
    } catch (error) {
      toast({ title: "Login failed", description: error.message, status: "error", isClosable: true });
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      // Implement token handling and storage (e.g., localStorage)
      toast({ title: "Signup successful", status: "success", isClosable: true });
    } catch (error) {
      toast({ title: "Signup failed", description: error.message, status: "error", isClosable: true });
    }
  };

  return (
    <Box p={4}>
      <Navigation />

      <VStack spacing={4} align="stretch">
        <Heading size="lg" mb={4}>
          Login or Signup
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password" />
        </FormControl>
        <Button leftIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin} aria-label="Login">
          Login
        </Button>
        <Text textAlign="center">or</Text>
        <Button leftIcon={<FaUserPlus />} colorScheme="green" onClick={handleSignup} aria-label="Signup">
          Signup
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
