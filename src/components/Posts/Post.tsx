import React from "react";
import styled from "styled-components";
export interface IPost {
  title: string;
  text: string;
}
type Props = {
  post: IPost;
  footer?: boolean;
};
interface IStyledPost {
  footer?: boolean;
}
const StyledPost = styled.article<IStyledPost>`
  ${(props) =>
    props.footer &&
    `
    & h3{
      font-size:${props.theme.fontSizes.medium};
      color:${props.theme.colors.footerH};
    }
    & p{
      font-size:${props.theme.fontSizes.footerText};
      color:${props.theme.colors.onyx};
    }
`}
`;
const StyledTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
`;
const StyledText = styled.p``;

const Post = ({ post, footer }: Props) => {
  return (
    <StyledPost footer={footer}>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledText>{post.text}</StyledText>
    </StyledPost>
  );
};
export default Post;
