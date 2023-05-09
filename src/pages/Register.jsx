import React from "react";
import RegisterForm from "../components/Forms/RegisterForm";
import { Box } from "@chakra-ui/react";

const Register = () => {
  return (
    <Box
      bg="darkP"
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <RegisterForm />
    </Box>
  );
};

export default Register;
