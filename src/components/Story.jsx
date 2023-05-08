import React from "react";
import { Link } from "react-router-dom";
import { usePostContext } from "../hooks/usePostContext";
const Story = ({ story, size }) => {
  const { handlePost, isFinished, isConclusion, isDev } = usePostContext();

  const hrefLink = `/${isFinished ? "story" : "add"}/${story._id}`;
  const handleClick = () => {
    handlePost(story);
  };
  return size === "sm" ? (
    <div>
      {story._id}
      <Link to={`/story/${story._id}`}>
        <button onClick={handleClick}>POST DETAILS</button>
      </Link>
      <Link to={hrefLink}>
        <button onClick={handleClick}>
          {isDev && "Write development"}
          {isConclusion && "Write conclusion"}
          {isFinished && "read"}
        </button>
      </Link>
    </div>
  ) : size === "md" ? (
    <div>{story.title}</div>
  ) : size === "lg" ? (
    <div>lg</div>
  ) : (
    ""
  );
};

export default Story;
