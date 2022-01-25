import React from "react";
import styled from "styled-components";
import { media } from "../styles";
const A = styled.a`
  &.fa{
  width: 2em;
  color:white;
  padding:0px;
  margin:0px;
  margin-left:10px;
  height: 2em;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 2em; 
  text-align: center;  
    text-decoration: none;
  }
  &.fa:hover {
    opacity: 0.7;
`;

type Props = {};
const StyledMedia = styled.div`
  background-color: black;
  text-align: right;
  padding: 10px 5% 0 0;
  margin: 0px;
  width: 95%;
  height: 50px;
  ${(props) => media.greaterThan('sm')`
  width:90%;
  padding: 10px 10% 0 0;
  margin:0px;
  `}
`;
const socialMedias = ["google", "twitter", "linkedin", "instagram"];
const SocialMedia = (props: Props) => {
  return (
    <StyledMedia>
      {socialMedias.map((media) => (
        <A href="#" key={media} className={"fa ".concat(`fa-${media}`)}>
          {" "}
        </A>
      ))}
    </StyledMedia>
  );
};
export default SocialMedia;
