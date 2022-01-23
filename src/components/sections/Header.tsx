import React from "react";
import styled from "styled-components";
import { SocialMedia } from "..";
import { SearchSection } from ".";

type Props = {};
const StyledHeader = styled.header``;
const Header = (props: Props) => {
  return (
    <StyledHeader>
      <SocialMedia />
      <SearchSection></SearchSection>
    </StyledHeader>
  );
};
export default Header;
