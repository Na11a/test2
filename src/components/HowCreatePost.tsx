import React from "react";
import styled from "styled-components";
import { media } from "../styles";
import { ImageWrapper } from "../styles/components";
import { pxToRem } from "../styles/convector";

type Props = {};
const StyledSection = styled.section`
  padding: 0 5%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-bottom: 10px solid ${(props) => props.theme.colors.onyx};
  ${(props) => media.greaterThan("sm")`
    display:flex;
    flex-direction:row;
    padding:8vh 10%;
    align-items: center;
    `}
`;
const StyledH2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: 400;
`;
const StyledDescription = styled.div`
  ${(props) => media.greaterThan("sm")`
    width:40vw;
    margin-right:10vw;
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
export default function HowCreatePost({}: Props) {
  return (
    <StyledSection>
      <StyledDescription>
        <StyledH2>Your title can be long and descriptive</StyledH2>
        <StyledText>
          Maecenas ut lacus vel justo mollis pharetra. Donec vel mollis justo.
          Curabitur fermentum, felis id accumsan sodales, erat arcu gravida
          quam, sed varius odio est a eros. Proin pharetra vel nunc vitae
          euismod. Nulla a urna auctor, pharetra enim a, interdum lacus.
        </StyledText>
        <StyledButton>Read More</StyledButton>
      </StyledDescription>

      <ImageWrapper
        src="postCreate.jpeg"
        alt="Post create"
        width="50%"
        padding="5% 0 10% 0"
        height="auto"
      />
    </StyledSection>
  );
}
