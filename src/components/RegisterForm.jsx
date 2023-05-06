import React, { useState } from "react";
import useRegister from "../hooks/useRegister";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useRegister();

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
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={email} onChange={handleEmail} />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
