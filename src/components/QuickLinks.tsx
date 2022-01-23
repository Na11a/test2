import React from "react";
import styled from "styled-components";
import StyledSection from "../styles/components/Section";
import { H3 } from "../styles/components";

type Props = {};

const StyledLinks = styled.ul`
  flex-direction: column;
  display:flex;
  box-shadow:none;
  padding-left:0px;
  & a{
    display:inline;
    width:90%;
    border-bottom: 0.1px solid grey;
    margin-top:1vh;
    color:${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.small};
    text-transform:capitalize;
    text-decoration-line:none;
  }
  & a::before{
    content: "•";  
    color: ${(props) => props.theme.colors.grey}; 
    font-weight: bold; 
    display: inline-block; 
    width: 1em;  
  }
`
const QuickLinks = (props: Props) => {
    const links = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut', 'labore et dolore magna aliqua', 'Ut enim ad minim veniam', 'quis nostrud exercitation ullamco', 'laboris nisi ut aliquip ex ea commodo consequat', 'Duis aute irure dolor in reprehenderit in voluptate' ,'velit esse cillum dolore eu fugiat nulla pariatur', 'Excepteur sint occaecat cupidatat non proident', 'sunt in culpa qui officia deserunt mollit', 'anim id est laborum']

  return (
    <StyledSection>
        <H3>Quick Links</H3>
        <StyledLinks>
        {links && links.map(link =>
            (<a key={link} href="/">{link}</a>)
        )}
        </StyledLinks>
    </StyledSection>
  );
};
export default QuickLinks;
