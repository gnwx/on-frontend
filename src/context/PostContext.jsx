import { createContext, useEffect, useState } from "react";

const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState(null);

  let isFinished =
    post && post.intro && post.development && post.conclusion ? true : false;
  let isDev = post && post.intro && !post.development ? true : false;

  let isConclusion =
    post && post.intro && post.development && !post.conclusion ? true : false;

  useEffect(() => {
    getPostFromLocal();
  }, []);

  const handlePost = (p) => {
    localStorage.setItem("post", JSON.stringify(p));
    setPost(p);
    console.log(post);
  };

  const getPostFromLocal = () => {
    const local = JSON.parse(localStorage.getItem("post"));
    if (!local) {
      console.log("no post!");
    }
    setPost(local);
  };

  const values = {
    post,
    handlePost,
    isFinished,
    isDev,
    isConclusion,
    getPostFromLocal,
  };
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export { PostContext, PostContextProvider };
