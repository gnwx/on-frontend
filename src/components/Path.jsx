import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Path = () => {
  const [title, setTitle] = useState("/");

  const location = useLocation();
  const p = location.pathname;
  useEffect(() => {
    switch (p) {
      case "/":
        setTitle("Home");
        break;
      case "/register":
        setTitle("Register");
        break;
      case "/login":
        setTitle("Login");
        break;
      case "/create":
        setTitle("Create story");
        break;
      default:
        if (p.startsWith("/story")) {
          setTitle("Story Details");
        } else if (p.startsWith("/add")) {
          setTitle("Add Section");
        }
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{
        position: "absolute",
        bg: "path",
        color: "white",
        borderBottom: "2px solid #F9F9F9",
        borderRadius: "5px",
        fontSize: 18,
        padding: "10px 15px",
        left: 20,
        marginTop: 10,
      }}
    >
      <Text>{title}</Text>
    </Box>
  );
};

export default Path;
