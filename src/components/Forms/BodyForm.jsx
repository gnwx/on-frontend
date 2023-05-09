import React, { useState } from "react";
import useBody from "../../hooks/useBody";
import { usePostContext } from "../../hooks/usePostContext";
import PurpleTextarea from "../PurpleTextarea";
import YellowButton from "../YellowButton";
import { Box, Stack, Text } from "@chakra-ui/react";
const BodyForm = () => {
  const [body, setBody] = useState("");
  const { post, isDev, isConclusion } = usePostContext();
  const type = isDev ? "dev" : isConclusion ? "conc" : "";
  const { createBody, error, createMessage } = useBody(type, post._id);

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBody(body);
    setBody("");
  };
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
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
          {createMessage && <Text color="white">{createMessage}</Text>}
          {error && error.message && <Text>{error.message}</Text>}
          <PurpleTextarea
            placeholder={`Story ${
              type === "dev" ? "development" : "conclusion"
            }...`}
            value={body}
            handleChange={handleBody}
          />
          <YellowButton type="submit" size="lg">
            Submit
          </YellowButton>

          {/*Validation error'u handle et, yukaridaki sadece logic error'u veriyor */}
        </Stack>
      </form>
    </Box>
  );
};

export default BodyForm;
