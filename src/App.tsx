import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import  { ThemeProvider } from "styled-components";
import { Footer, Header, Main } from "./components/sections";
import { fetchPosts } from "./store/actions/asynk-fetch";
import { GlobalStyles, theme } from "./styles";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyles />
            <Header />
            <Main />
            <Footer />
          </Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
