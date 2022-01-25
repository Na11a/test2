import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { HomePage, PostsPage } from "../../pages";

type Props = {};
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const Main = (props: Props) => {
  return (
    <StyledMain>
      <Routes>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </StyledMain>
  );
};
export default Main;
