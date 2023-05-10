import React from "react";
import Story from "../components/Story";
import { usePostContext } from "../hooks/usePostContext";
import { Box } from "@chakra-ui/react";

const StoryDetails = () => {
  return (
    <Box
      bg="darkP"
      sx={{
        width: "100%",
        height: "100vh",
        paddingTop: 5,
      }}
    >
      <Story size="lg" />
    </Box>
  );
};

export default StoryDetails;
