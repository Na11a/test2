import React from "react";
import styled from "styled-components";
import { SocialMedia } from "..";
import { SearchSection } from ".";
import { media } from "../../styles";

type Props = {};
const StyledHeader = styled.header`
  width:90%;
  padding: 0 5% 5% 5%;
  ${media.greaterThan("sm")`
  width:80%;
  padding: 0 10%;
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
