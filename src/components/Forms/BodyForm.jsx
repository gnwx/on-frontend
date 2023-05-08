import React, { useState } from "react";
import useBody from "../../hooks/useBody";
import { usePostContext } from "../../hooks/usePostContext";

const BodyForm = () => {
  const [body, setBody] = useState("");
  const { post, isDev, isConclusion } = usePostContext();
  const type = isDev ? "dev" : isConclusion ? "conc" : "";
  const { createBody, error } = useBody(type, post._id);

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBody(body);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="body">Story body</label>
          <input id="body" type="text" value={body} onChange={handleBody} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BodyForm;
