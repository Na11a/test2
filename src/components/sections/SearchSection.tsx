import React from "react";
import styled from "styled-components";
import { CompanyLogo, SearchForm, NavBar } from "..";

type Props = {};
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 2vh;
  flex-wrap:wrap;
  align-items: center;
`;

const Search = (props: Props) => {
  return (
    <Section>
      <NavBar />
      <CompanyLogo  src="companyLogo.jpeg" alt="bluePrint" />
      <SearchForm></SearchForm>
    </Section>
  );
};
export default Search;
