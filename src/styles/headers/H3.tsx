import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
};

const StyledH3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: bold;
`;
const H3 = ({ children }: Props) => {
  return <StyledH3>{children}</StyledH3>;
};
export default H3;
