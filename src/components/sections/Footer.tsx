import React from "react";
import styled from "styled-components";
import { About } from "../Footer";
import { media } from "../../styles";
import {ContactUs} from "../Footer";
import {LatestBlogPosts} from "../Footer";
import {QuickLinks} from "../Footer";

type Props = {};
const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.powderWhite};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  ${media.greaterThan("sm")`
  padding:30px 10vw;
  flex-direction: row;
  justify-content:space-between;
  flex-wrap:wrap;
  `}
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
