import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";
import Story from "../components/Story";
import { Box, Container, Stack } from "@chakra-ui/react";
import YellowButton from "../components/YellowButton";
const Home = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetchUnfinished();
  }, []);

  const fetchUnfinished = () => {
    axios
      .get(`${API_BASE_URL}/api/stories/unfinished`)
      .then((resp) => setStories(resp.data.unfinishedStories));
  };
  const fetchFinished = () => {
    axios
      .get(`${API_BASE_URL}/api/stories/finished`)
      .then((resp) => setStories(resp.data.stories));
  };

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
      <Stack
        direction="row"
        sx={{ justifyContent: "center", display: "flex", marginBottom: 10 }}
      >
        <YellowButton size="md" handleClick={fetchUnfinished}>
          Unfinished
        </YellowButton>
        <YellowButton size="md" handleClick={fetchFinished}>
          Finished
        </YellowButton>
      </Stack>
      <Container>
        {stories ? (
          stories.map((story) => {
            return <Story key={story._id} story={story} size="sm" />;
          })
        ) : (
          <Box>There is no story!</Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;
