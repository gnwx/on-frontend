import React from "react";
import Story from "../components/Story";
import { usePostContext } from "../hooks/usePostContext";

const StoryDetails = () => {
  const { post } = usePostContext();
  return (
    <div>
      <Story story={post} size="lg" />
    </div>
  );
};

export default StoryDetails;
