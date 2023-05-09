import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  Box,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import YellowButton from "../YellowButton";
import PurpleInput from "../PurpleInput";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, loading, error, loginMessage } = useLogin();
  console.log(loginMessage);
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    if (loginMessage.success) {
      setUsername("");
      setPassword("");
      navigate("/");
    }
  };
  console.log(error);

  return (
    <Box
      sx={{
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        width: 310,
        paddingTop: 40,

        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          <PurpleInput
            placeholder="Username"
            type="text"
            value={username}
            handleChange={handleUsername}
          />
          <PurpleInput
            placeholder="Password"
            type="password"
            value={password}
            handleChange={handlePassword}
          />
          <Link href="/register">Create account</Link>
          <YellowButton type="submit" disabled={loading} size="md">
            {loading ? <Spinner size="sm" color="white" /> : "Login"}
          </YellowButton>
          {error && error.map((err, idx) => <Text key={idx}>{err.msg} </Text>)}
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
