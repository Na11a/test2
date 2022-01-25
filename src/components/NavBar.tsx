import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles";
import { COMPANY_LOGO } from "./CompanyLogo";
type Props = {};
interface LiProps {
  fontSize?: number;
  textTransform?: string;
  color?: string;
}

const pages = [
  "homepage",
  "posts",
  "top sites",
  "programs",
  "contact us",
  "blog",
];
interface IOpen {
  isOpen?: boolean;
}
const Nav = styled.nav<IOpen>`
  position: relative;
  ${(props) =>
    props.isOpen &&
    ` position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1;
    padding: 40px 20px;
    background-image:linear-gradient(to left,#00f, #55f);
    &:before{
      content:url(${COMPANY_LOGO});
      position:absolute;
      left:25%;
      top:25px;
      z-index:4;

    }`}

  ${media.greaterThan("sm")`
  width: 100%;
  padding-bottom: 2vh;
`}
`;
const Hamburger = styled.div<IOpen>`
  ${(props) =>
    !props.isOpen
      ? `display: block;
      position: relative;
      width: 30px;
      height: 20px;
      z-index: 2;
      & span {
        position: absolute;
        background-color: #000;
        left: 0;
        width: 100%;
        height: 2px;
        top: 9px;
      }
      &:before,
      :after {
        content: "";
        background-color: #000;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
      }
      &:before {
        top: 0;
      }
      &:after {
        bottom: 0;
      };`
      : // if open set X
        `
      position: absolute;
      right: 50px;
      top: 32px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      &:hover {
      opacity: 1;
      }
      &:before,:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 25px;
      width: 2px;
      background-color: rgba(255,255,255,1);
      }
      &:before {
      transform: rotate(45deg);
      }
      &:after {
      transform: rotate(-45deg);
  `}

  ${(props) => media.greaterThan("sm")`
    display:none;
  `}
`;

const StyledUl = styled.ul<IOpen>`
  ${(props) =>
    props.isOpen
      ? ` text-align: center;
  list-style-type: none;
  padding: 150px 20px 0 20px;
  padding-inline-start: 0px;
  margin: 0px;
  width: 100%;`
      : `display:none;`}
  ${(props) => media.greaterThan("sm")`
  background-color:#fff;
  width:100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap:wrap;
  box-shadow: 0px 3px 5px gray;
`};
`;

const StyledLi = styled.li<LiProps>`
  margin: 10px 40px;
  padding: 10px 10px;
  border-bottom: 1px solid white;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.small};
  text-transform: ${({ textTransform }) => textTransform || "normal"};
  color: ${(props) => props.theme.colors.white};

  ${(props) => media.greaterThan("sm")`
  margin:0px;
  padding:10px 30px;
    color:${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.normal};
`}
`;
const NavBar = (props: Props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <Nav className="navbar" isOpen={hamburgerOpen}>
      <StyledUl isOpen={hamburgerOpen} className="nav-menu">
        {pages.map((title, id) => {
          return (
            <Link
              to={title === "homepage" ? "/" : title}
              key={id}
              style={{ textDecoration: "none" }}
            >
              <StyledLi textTransform="uppercase">
                {title}
              </StyledLi>
            </Link>
          );
        })}
      </StyledUl>
      <Hamburger onClick={toggleHamburger} isOpen={hamburgerOpen}>
        <span></span>
      </Hamburger>
    </Nav>
  );
};
export default NavBar;
