import React from "react";
import styled from "styled-components";
import { About } from "..";
import ContactUs from "../ConctactUs";
import LatestBlogPosts from "../LatestBlogPosts";
import QuickLinks from "../QuickLinks";

type Props = {};
const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.powderWhite};
  display: flex;
  flex-direction: column;
  padding-left: 5vw;

`;
const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <About />
      <QuickLinks />
      <LatestBlogPosts />
      <ContactUs />
    </StyledFooter>
  );
};
export default Footer;
