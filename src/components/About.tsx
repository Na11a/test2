import React from "react";
import { CompanyLogo } from ".";
import { Button, H3 } from "../styles/components";
import { FooterTextBlock } from "../styles/components/P";
import StyledSection from "../styles/components/Section";
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

type Props = {};

const About = (props: Props) => {
  return (
    <StyledSection>
      <H3>About Us</H3>
      <CompanyLogo width="40vw" height="15vh" />
      <FooterTextBlock>{text}</FooterTextBlock>
      <Button type={{readMore:true}}>{'read more >>'}</Button>
    </StyledSection>
  );
};
export default About;
