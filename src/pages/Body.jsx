import React, { useEffect } from "react";
import BodyForm from "../components/Forms/BodyForm";
import Story from "../components/Story";
import { Box } from "@chakra-ui/react";

const Body = () => {
  return (
    <Box
      bg="darkP"
      sx={{
        width: "100%",
        minHeight: "100vh",
        height: "max-content",
        justifyContent: "center",
        paddingY: 10,
      }}
    >
      <Story size="md" />
      <BodyForm />
    </Box>
  );
};

export default Body;
