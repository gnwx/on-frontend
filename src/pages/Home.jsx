import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";
import Story from "../components/Story";
import { Box, Container, Stack } from "@chakra-ui/react";
import YellowButton from "../components/YellowButton";
const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchUnfinished();
  }, []);

  const fetchUnfinished = () => {
    axios
      .get(`${API_BASE_URL}/api/stories/unfinished`)
      .then((resp) => setStories(resp.data.unfinishedStories))
      .catch((err) => setError(err.response.data.error));
  };
  const fetchFinished = () => {
    axios
      .get(`${API_BASE_URL}/api/stories/finished`)
      .then((resp) => setStories(resp.data.stories))
      .catch((err) => setError(err.response.data.error));
  };
  console.log(error);

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
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <YellowButton size="md" handleClick={fetchUnfinished}>
          Unfinished
        </YellowButton>
        <YellowButton size="md" handleClick={fetchFinished}>
          Finished
        </YellowButton>
      </Stack>
      <Container>
        {stories &&
          stories.map((story) => (
            <Story key={story._id} story={story} size="sm" />
          ))}
      </Container>
    </Box>
  );
};

export default Home;
