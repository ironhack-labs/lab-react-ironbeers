import { Box, Center, useColorModeValue, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Center p={3}>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
            <Text fontSize="4xl">🏠</Text>
          </NavLink>
        </Center>
      </Box>
    </>
  );
}
