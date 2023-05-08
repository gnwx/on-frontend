import React, { useState } from "react";
import useCreate from "../../hooks/useCreate";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const { create, error, createMessage } = useCreate();
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create(title, category, body);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={handleTitle} />
        </div>
        <div>
          <label htmlFor="username">Category</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={handleCategory}
          />
        </div>
        <div>
          <label htmlFor="body">Story begginning</label>
          <input id="body" type="text" value={body} onChange={handleBody} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
