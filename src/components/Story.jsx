import React, { useEffect, useState } from "react";
import { Container, Stack, Text } from "@chakra-ui/react";
import YellowButton from "./YellowButton";
import { Link } from "react-router-dom";

// contexts
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostContext } from "../hooks/usePostContext";

import { useDetermineSection } from "../hooks/useDetermineSection";

import {
  titleStyles,
  largeContainerStyles,
  mediumContainerStyles,
  smallContainerStyles,
  categoryStack,
  categoryText,
} from "../styles/Story";

import {
  getLink,
  butonLabel,
  calculateRelativeTime,
} from "../helpers/storyHelpers";
const Story = ({ story, size }) => {
  const [time, setTime] = useState("");

  const { user } = useAuthContext();
  const { handlePost, post } = usePostContext();
  // check if there is a stored post if its not then just use story prop that comes from Home
  const { localIsFinished, localIsDev, localIsConclusion, hrefLink } =
    useDetermineSection(story ? story : post);

  const cardLink = getLink(story, post, user, hrefLink);
  const butonText = butonLabel(
    user,
    story,
    localIsDev,
    localIsConclusion,
    localIsFinished
  );
  const handleClick = () => {
    handlePost(story);
  };

  useEffect(() => {
    const formattedTime = calculateRelativeTime(
      story ? story.createdAt : post.createdAt
    );
    setTime(formattedTime);
  }, [time]);
  return (
    <Container
      bg={localIsFinished ? "finished" : "nav"}
      sx={
        size === "sm"
          ? smallContainerStyles
          : size === "md"
          ? mediumContainerStyles
          : largeContainerStyles
      }
    >
      {size === "sm" ? (
        <>
          <Stack sx={categoryStack}>
            <Text sx={categoryText}>{story.category}</Text>
            <Text sx={{ fontSize: "12" }}>{time}</Text>
          </Stack>
          <Stack>
            <Link to={`/story/${story._id}`} onClick={handleClick}>
              <Text sx={titleStyles}>{story.title}</Text>
            </Link>
          </Stack>

          <Stack sx={{ alignItems: "flex-end" }}>
            <Link to={cardLink}>
              <YellowButton size="sm" handleClick={handleClick}>
                {butonText}
              </YellowButton>
            </Link>
          </Stack>
        </>
      ) : (
        <>
          <Stack sx={categoryStack}>
            <Text sx={categoryText}>{post.category}</Text>
            <Text sx={{ fontSize: "12" }}>{time}</Text>
          </Stack>
          <Stack>
            <Text sx={titleStyles}>{post.title}</Text>
          </Stack>
          <Stack sx={{ textAlign: "justify", gap: 5, color: "white" }}>
            <Text>{post.intro && post.intro.body}</Text>
            <Text>{post.development && post.development.body}</Text>
            <Text>{post.conclusion && post.conclusion.body}</Text>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            <Text>intro:{post.intro && post.intro.author} </Text>
            <Text>
              {post.development && `development: ${post.development.author}`}
            </Text>
            <Text>
              {post.conclusion && `conclusion:${post.conclusion.author}`}
            </Text>
          </Stack>
        </>
      )}
    </Container>
  );
};

export default Story;
