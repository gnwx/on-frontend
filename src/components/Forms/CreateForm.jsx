import React, { useState } from "react";
import useCreate from "../../hooks/useCreate";
import { Box, Select, Stack, Text } from "@chakra-ui/react";
import YellowButton from "../YellowButton";
import PurpleInput from "../PurpleInput";
import PurpleTextarea from "../PurpleTextarea";
const CreateForm = () => {
  //form inputs
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const { create, error, createMessage, loading } = useCreate();

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
    setTitle("");
    setCategory("");
    setBody("");
  };
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        paddingTop: 40,
        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          <PurpleInput
            placeholder="Title"
            type="text"
            value={title}
            handleChange={handleTitle}
          />
          <Select bg="nav" color="black" onChange={handleCategory}>
            <option value="Fantasy">Fantasy</option>
            <option value="Paranormal">Paranormal</option>
            <option value="Horror">Horror</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Humor">Humor</option>
            <option value="Poetry">Poetry </option>
            <option value="Tik Tok fiction">Tik Tok fiction</option>
            <option value="Fiction">Fiction</option>
          </Select>
          <PurpleTextarea
            placeholder="Text"
            value={body}
            handleChange={handleBody}
          />
          <YellowButton type="submit" size="lg" disabled={loading}>
            Create
          </YellowButton>
          {createMessage && <Text color="white">{createMessage}</Text>}
          {error &&
            error.map((err) => {
              return <Text> {err.msg} </Text>;
            })}
        </Stack>
      </form>
    </Box>
  );
};

export default CreateForm;
