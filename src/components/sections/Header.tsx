import React from "react";
import styled from "styled-components";
import { SocialMedia } from "..";
import { SearchSection } from ".";
import { media } from "../../styles";

type Props = {};
const StyledHeader = styled.header`
  width:100%;
  ${media.greaterThan("sm")`
  width:100%;
  `}
`;
const Header = (props: Props) => {
  return (
    <StyledHeader>
      <SocialMedia />
      <SearchSection></SearchSection>
    </StyledHeader>
  );
};
export default Header;
