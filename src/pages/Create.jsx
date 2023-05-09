import React from "react";
import CreateForm from "../components/Forms/CreateForm";
import { Box } from "@chakra-ui/react";
const Create = () => {
  return (
    <Box
      bg="darkP"
      sx={{
        width: "100%",
        height: "100vh",
        padding: 10,
      }}
    >
      <CreateForm />
    </Box>
  );
};

export default Create;
