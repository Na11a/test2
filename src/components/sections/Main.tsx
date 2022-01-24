import React from "react";
import styled from "styled-components";
import { HowCreatePost } from "..";

type Props = {};
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const Main = (props: Props) => {
  return (
    <StyledMain>
      <HowCreatePost />
    </StyledMain>
  );
};
export default Main;
