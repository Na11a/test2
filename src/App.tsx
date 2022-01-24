import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "./components/sections";
import { GlobalStyles, theme } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider  theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Header />
          <Footer/>
        </Fragment>
      </ThemeProvider>
    </>
  );
}

export default App;
