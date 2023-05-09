import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import { Box, Input, Stack, Text } from "@chakra-ui/react";
import YellowButton from "../YellowButton";
import PurpleInput from "../PurpleInput";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, loading, registerMessage } = useRegister();
  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, username, password);
    if (registerMessage.success) {
      setEmail("");
      setUsername("");
      setPassword("");
      navigate("/login");
    }
  };
  return (
    <Box
      sx={{
        color: "white",
        width: 310,
        display: "flex",
        justifyContent: "center",
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
            placeholder="Email"
            type="text"
            value={email}
            handleChange={handleEmail}
          />
          <PurpleInput
            id="username"
            placeholder="Username"
            type="text"
            value={username}
            handleChange={handleUsername}
          />
          <PurpleInput
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            handleChange={handlePassword}
          />
          <YellowButton size="md" type="submit" disabled={loading}>
            Register
          </YellowButton>
          {error && error.map((err, idx) => <Text key={idx}>{err.msg} </Text>)}
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterForm;
