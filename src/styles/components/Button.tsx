import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align:center;
  text-transform: uppercase;
  margin-left:10px;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;
type Props = {
  children?: string;
};

const Button = ({ children }: Props) => {
  return <StyledButton onClick={e => e.preventDefault()}>{children}</StyledButton>;
};
export default Button;
