import React, { useEffect } from "react";
import BodyForm from "../components/Forms/BodyForm";
import Story from "../components/Story";
import { Box } from "@chakra-ui/react";

const Body = () => {
  return (
    <Box
      bg="darkP"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "20px 10px",
      }}
    >
      <Story size="md" />
      <BodyForm />
    </Box>
  );
};

export default Body;
