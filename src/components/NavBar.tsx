import React, { useState } from "react";
import styled from "styled-components";
import { Hamburger } from "./";
import { Li, Ul } from "../styles/components";
import { media } from "../styles";
type Props = {};

const pages = [
  "homepage",
  "our team",
  "top sites",
  "programs",
  "contact us",
  "blog",
];
const Nav = styled.nav`
  ${media.greaterThan("sm")`
  width: 100%;
  padding-bottom: 2vh;
`}
`;

const NavBar = (props: Props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <Nav className="navbar">
      <Ul open={hamburgerOpen} className="nav-menu">
        {pages.map((title, id) => {
          return (
            <Li textTransform="uppercase" key={id}>
              {title}
            </Li>
          );
        })}
      </Ul>
      <div onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </Nav>
  );
};
export default NavBar;
