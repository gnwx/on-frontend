import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostContext } from "../hooks/usePostContext";
import { useDetermineSection } from "../hooks/useDetermineSection";
import { Container, Stack, Text } from "@chakra-ui/react";
import YellowButton from "./YellowButton";
import {
  titleStyles,
  largeContainerStyles,
  mediumContainerStyles,
  smallContainerStyles,
} from "../styles/Story";
const Story = ({ story, size }) => {
  const { user } = useAuthContext();
  const { handlePost, post, getPostFromLocal } = usePostContext();
  // check if there is a stored post if its not then just use story prop that comes from Home
  const { localIsFinished, localIsDev, localIsConclusion, hrefLink } =
    useDetermineSection(story ? story : post);

  const handleClick = () => {
    handlePost(story);
  };

  return size === "sm" ? (
    <Container
      bg={localIsFinished ? "finished" : "nav"}
      sx={smallContainerStyles}
    >
      <Stack>
        <Text sx={{ color: "white", fontSize: "sm" }}>{story.category}</Text>
      </Stack>
      <Stack>
        <Link to={`/story/${story._id}`} onClick={handleClick}>
          <Text sx={titleStyles}>{story.title}</Text>
        </Link>
      </Stack>

      <Stack sx={{ alignItems: "flex-end" }}>
        <Link to={user ? hrefLink : `/story/${story._id}`}>
          <YellowButton size="sm" handleClick={handleClick}>
            {!user && "Read"}
            {user && localIsDev && "Write development"}
            {user && localIsConclusion && "Write conclusion"}
            {user && localIsFinished && "Read"}
          </YellowButton>
        </Link>
      </Stack>
    </Container>
  ) : size === "md" ? (
    <Container
      bg={localIsFinished ? "finished" : "nav"}
      sx={mediumContainerStyles}
    >
      <Stack>
        <Text sx={{ color: "white", fontSize: "sm" }}>{post.category}</Text>
      </Stack>
      <Stack>
        <Text sx={titleStyles}>{post.title}</Text>
      </Stack>
      <Stack sx={{ textAlign: "justify", gap: 5 }}>
        <Text sx={{ color: "white" }}>{post?.intro.body} </Text>
        <Text>{post.development && post.development.body}</Text>
        <Text>{post.conclusion && post.conclusion.body}</Text>
      </Stack>
      <Stack>
        <Text>intro:{post.intro.author} </Text>
        <Text>
          {post.development && `development: ${post.development.author}`}{" "}
        </Text>
        <Text>
          {post.conclusion && `conclusion:${post.conclusion.author}`}{" "}
        </Text>
      </Stack>
    </Container>
  ) : size === "lg" ? (
    <Container
      bg={localIsFinished ? "finished" : "nav"}
      sx={largeContainerStyles}
    >
      <Stack>
        <Text sx={{ color: "white", fontSize: "sm" }}>{post?.category}</Text>
      </Stack>
      <Stack>
        <Text sx={titleStyles}>{post?.title}</Text>
      </Stack>
      <Stack
        sx={{
          textAlign: "justify",
          gap: 14,
          color: "#c1c1c1",
        }}
      >
        <Text>{post?.intro?.body} </Text>
        <Text>{post.development && post.development.body}</Text>
        <Text>{post.conclusion && post.conclusion.body}</Text>
      </Stack>
      <Stack>
        <Text>intro:{post?.intro?.author} </Text>
        <Text>
          {post.development && `development: ${post.development.author}`}{" "}
        </Text>
        <Text>
          {post.conclusion && `conclusion:${post.conclusion.author}`}{" "}
        </Text>
      </Stack>
    </Container>
  ) : (
    ""
  );
};

export default Story;
