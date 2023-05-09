import React, { useEffect } from "react";
import BodyForm from "../components/Forms/BodyForm";
import Story from "../components/Story";
import { usePostContext } from "../hooks/usePostContext";
import { Box } from "@chakra-ui/react";

const Body = () => {
  const { post } = usePostContext();

  return (
    <Box
      bg="darkP"
      sx={{
        width: "100%",
        height: "100vh",
        padding: 10,
      }}
    >
      <Story size="md" />
      <BodyForm />
    </Box>
  );
};

export default Body;
