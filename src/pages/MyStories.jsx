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
        height: "100%",
        justifyContent: "center",
        padding: 10,
      }}
    >
      {myStories.map((story) => (
        <Story story={story} size="sm" />
      ))}
    </Box>
  );
};

export default MyStories;
