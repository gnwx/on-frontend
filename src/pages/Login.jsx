import LoginForm from "../components/Forms/LoginForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { Box } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      bg="darkP"
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
