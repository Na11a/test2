import React from "react";
import styled from "styled-components";
import StyledSection from "../../styles/components/Section";
import { Button, H3 } from "../../styles/components";
import { useTypeSelector } from "../../hooks/UseTypeSelector";
import { Post } from "./../Posts";
type Props = {};

const LatestBlogPosts = (props: Props) => {
  const { error, loading, posts } = useTypeSelector((state) => state.posts);

  return (
    <StyledSection>
      <H3>latest blog posts</H3>
      {posts &&
        posts.slice(2).map((post, index) => {
          return (
            <div key={index}>
              <Post  post={post} footer />
              <Button  type={{ readMore: true }}>{"read more >>"}</Button>
            </div>
          );
        })}
    </StyledSection>
  );
};
export default LatestBlogPosts;
