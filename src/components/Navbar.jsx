import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import YellowButton from "./YellowButton";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useAuthContext();
  return (
    <Box
      bg="nav"
      sx={{
        display: "flex",

        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        height: 20,
      }}
    >
      <Stack>
        <Text>Logo</Text>
      </Stack>
      <Stack direction="row">
        <Link to="/">
          <YellowButton>Home</YellowButton>
        </Link>
        {!user ? (
          <>
            <Link to="/login">
              <YellowButton>Login</YellowButton>
            </Link>
          </>
        ) : (
          <>
            <Link to="/create">
              <YellowButton>Create Story</YellowButton>
            </Link>
            <YellowButton>{user}'s Stories</YellowButton>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
