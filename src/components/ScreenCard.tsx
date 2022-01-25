import React from "react";
import styled from "styled-components";
import { media, theme } from "../styles";
import { ImageWrapper } from "../styles/components";
import { ITablet } from "./ScreenCards";

type Props = {
  tablet: ITablet;
};
const StyledSection = styled.section`
  ${(props) => media.greaterThan("sm")`
 width: 300px;
  padding-left:40px;
 `}

  text-align: center;
`;
const StyledH3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.blue};
  text-transform: capitalize;
`;
const StyledText = styled.p`
  padding: 1% 5%;
  color: ${(props) => props.theme.colors.onyx};
  font-size: ${(props) => props.theme.fontSizes.mainText};
`;

const ScreenCard = ({ tablet }: Props) => {
  return (
    <StyledSection>
      <ImageWrapper
        src={tablet.src}
        alt={tablet.title}
        width="100%"
        height="25vh"
      ></ImageWrapper>
      <StyledH3>{tablet.title}</StyledH3>
      <StyledText>{tablet.description}</StyledText>
    </StyledSection>
  );
};
export default ScreenCard;
