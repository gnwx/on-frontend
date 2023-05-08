import React from "react";
import BodyForm from "../components/Forms/BodyForm";
import Story from "../components/Story";
import { usePostContext } from "../hooks/usePostContext";

const Body = () => {
  const { post } = usePostContext();
  return (
    //TODO: post details while adding new section.
    <div>
      <Story story={post} size="md" />
      <BodyForm />
    </div>
  );
};

export default Body;
