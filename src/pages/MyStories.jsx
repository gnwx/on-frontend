import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Story from "../components/Story";
import { useAuthContext } from "../hooks/useAuthContext";
import { API_BASE_URL } from "../api";
import axios from "axios";
const MyStories = () => {
  const [myStories, setMyStories] = useState([]);
  const { user } = useAuthContext();
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/stories/mystories/${user}`)
      .then((resp) => setMyStories(resp.data.myStories));
  });
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
      {myStories.map((story, idx) => (
        <Story key={idx} story={story} size="sm" />
      ))}
    </Box>
  );
};

export default MyStories;
