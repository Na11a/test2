import React from "react";
import styled from "styled-components";
import { ContactInvitation, HowCreatePost, ScreenCards } from "..";

type Props = {};
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const Main = (props: Props) => {
  return (
    <StyledMain>
      <HowCreatePost />
      <ScreenCards />
      <ContactInvitation />
    </StyledMain>
  );
};
export default Main;
