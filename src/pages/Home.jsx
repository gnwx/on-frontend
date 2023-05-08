import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";
import Story from "../components/Story";
const Home = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/stories/unfinished`)
      .then((resp) => setStories(resp.data.unfinishedStories));
  }, []);

  return (
    <div>
      {stories.map((story) => {
        return <Story key={story._id} story={story} size="sm" />;
      })}
    </div>
  );
};

export default Home;
