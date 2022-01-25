import React from "react";
import styled from "styled-components";
import { Post } from ".";
import { useTypeSelector } from "../../hooks/UseTypeSelector";
import { media } from "../../styles";
import { IPost } from "./Post";

type Props = {};

const StyledPosts = styled.section`
  padding: 5%;
  font-size: ${(props) => props.theme.fontSizes.mainText};
  ${media.greaterThan("sm")`
    width:80%;
    padding: 0 10% 30px 10%;
  `}
`;
const Posts = (props: Props) => {
  const { posts, loading, error } = useTypeSelector((state) => state.posts);
  console.log(posts);
  return (
    <StyledPosts>
      {loading === false &&
        error === null &&
        posts.map((element: IPost, index) => (
          <Post key={index} post={element} />
        ))}
    </StyledPosts>
  );
};
export default Posts;
