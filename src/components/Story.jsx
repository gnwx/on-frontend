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

  const butonLabel = () => {
    if (!user) {
      return "Read";
    } else if (localIsDev) {
      return "Write development";
    } else if (localIsConclusion) {
      return "Write conclusion";
    } else if (localIsFinished) {
      return "Read";
    }
  };
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
          <Stack>
            <Text sx={{ color: "white", fontSize: "sm" }}>
              {story.category}
            </Text>
          </Stack>
          <Stack>
            <Link to={`/story/${story._id}`} onClick={handleClick}>
              <Text sx={titleStyles}>{story.title}</Text>
            </Link>
          </Stack>

          <Stack sx={{ alignItems: "flex-end" }}>
            <Link to={user ? hrefLink : `/story/${post._id}`}>
              <YellowButton size="sm" handleClick={handleClick}>
                {butonLabel()}
              </YellowButton>
            </Link>
          </Stack>
        </>
      ) : (
        <>
          <Stack>
            <Text sx={{ color: "white", fontSize: "sm" }}>{post.category}</Text>
          </Stack>
          <Stack>
            <Text sx={titleStyles}>{post.title}</Text>
          </Stack>
          <Stack sx={{ textAlign: "justify", gap: 5 }}>
            <Text sx={{ color: "white" }}>{post.intro && post.intro.body}</Text>
            <Text>{post.development && post.development.body}</Text>
            <Text>{post.conclusion && post.conclusion.body}</Text>
          </Stack>
          <Stack>
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
