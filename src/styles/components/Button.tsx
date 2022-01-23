import styled from "styled-components";
import React from "react";

type ButtonTypes = {
  readMore?:boolean
} 

const StyledButton = styled.button<ButtonTypes>`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align:center;
  text-transform: uppercase;
  margin-left:10px;
  border-radius: 5px;
  cursor: pointer;
  border:none;
  outline:none;

  ${(props) =>props.readMore && `
  border:none;
  outline:none;
  color:${props.theme.colors.blue};
  background-color:rgba(0, 0, 0, 0);
  text-transform:capitalize;
  `}
`;
type Props = {
  children: string;
  type?:ButtonTypes;
};


const Button = ({ children,type }: Props) => {
  return <StyledButton {...type} onClick={e => e.preventDefault()}>{children}</StyledButton>;
};
export default Button;
