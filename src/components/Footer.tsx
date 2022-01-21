import React from "react";
import styled from "styled-components";
import { About } from "./sections";

type Props = {};
const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.powderWhite};
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
`;
const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <About />
    </StyledFooter>
  );
};
export default Footer;
