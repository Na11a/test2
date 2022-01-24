import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { Footer, Header, Main } from "./components/sections";
import { GlobalStyles, theme } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider  theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Header />
          <Main />
          <Footer/>
        </Fragment>
      </ThemeProvider>
    </>
  );
}

export default App;
