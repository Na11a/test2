import React from "react";
import styled from "styled-components";
import { media } from "..";

type Props = {
  children: string;
};

const StyledH3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: bold;
  text-transform:capitalize;
  ${(props) => media.greaterThan('sm')`
    font-size:${(props) => props.theme.fontSizes.h3Desktop}
  `}
`;
const H3 = ({ children }: Props) => {
  return <StyledH3>{children}</StyledH3>;
};
export default H3;
