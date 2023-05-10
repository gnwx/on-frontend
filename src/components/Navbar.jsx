import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import YellowButton from "./YellowButton";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useAuthContext();
  const navbarStyles = {
    display: "flex",

    margin: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    height: 20,
  };
  return (
    <Box bg="nav" sx={navbarStyles}>
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
            <Link to="/mystories">
              <YellowButton>{user}'s Stories</YellowButton>
            </Link>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
