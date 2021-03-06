import React from "react";
import styled from "styled-components";
import { media } from "../../styles";
import { ImageWrapper } from "../../styles/components";
import { pxToRem } from "../../styles/convector";

type StyledProps = {
  onlyText?: boolean;
};
const StyledSection = styled.section<StyledProps>`
  padding: 0 5%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-bottom: 10px solid ${(props) => props.theme.colors.onyx};
  ${(props) => media.greaterThan("sm")`
    display:flex;
    flex-direction:row;
    padding:8vh 10vw;
    align-items: center;
    flex-wrap:wrap;
    justify-content:space-between;
    `}
  ${(props) =>
    props.onlyText &&
    // only text mode (use at PostPage)
    `
  background-color:white;
  display:block;
  padding:5%;
  border:none;
  margin:0;
  & img{
    display:none;
  }
  & button{
    display:none;
  }
  & h2{
    font-weight:bold;
    font-size:${props.theme.fontSizes.large};
  }
  `}
  ${props => props.onlyText && media.greaterThan('sm')`
    display:block;
    width:80%;
    text-align:left;
    & div{
      width:100%
    }
  `}
`;
const StyledH2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: 400;
`;
interface IStyledBlock {
  padding?: string;
  width?: string;
}
const StyledBlock = styled.div<IStyledBlock>`
  ${({ theme, padding, width }) => media.greaterThan("sm")`
    flex:1 1 200px;
    width:${() => width || "400px"};
    padding:${() => padding || "0 10vw 0 0"};
    `}
`;
const StyledText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.mainText};
`;
const StyledButton = styled.button`
  border: none;
  outline: none;
  text-transform: uppercase;
  padding: 20px 10px;
  background-color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSizes.buttonText};
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  ::after {
    content: ">>"; /* Insert content that looks like bullets */
    margin-left: 5px;
    font-size: ${pxToRem(18)};
  }
`;
const HowCreatePost = ({ onlyText }: StyledProps) => {
 
  return (
    <StyledSection onlyText={onlyText}>
      <StyledBlock>
        <StyledH2>Your title can be long and descriptive</StyledH2>
        <StyledText>
          Maecenas ut lacus vel justo mollis pharetra. Donec vel mollis justo.
          Curabitur fermentum, felis id accumsan sodales, erat arcu gravida
          quam, sed varius odio est a eros. Proin pharetra vel nunc vitae
          euismod. Nulla a urna auctor, pharetra enim a, interdum lacus.
        </StyledText>
        <StyledButton>Read More</StyledButton>
      </StyledBlock>
      <StyledBlock width="600px" padding="0">
        <ImageWrapper
          src="postCreate.jpeg"
          alt="Post create"
          width="auto"
          padding="5% 0 10% 0"
          height="auto"
        />
      </StyledBlock>
    </StyledSection>
  );
};
export default HowCreatePost;
