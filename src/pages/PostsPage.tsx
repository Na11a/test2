import React from "react";
import { HowCreatePost } from "../components/HomePage";
import { Posts } from "../components/Posts";

type Props = {};
const PostsPage = (props: Props) => {
  return (
    <>
      <HowCreatePost onlyText={true}/>
      <Posts />
    </>
  );
};
export default PostsPage;
