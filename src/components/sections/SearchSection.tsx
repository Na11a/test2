import React from "react";
import styled from "styled-components";
import { CompanyLogo, SearchForm, NavBar } from "..";
import { media } from "../../styles";

type Props = {};
const Section = styled.section`
  padding: 0 5vw;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  margin-top: 2vh;
  flex-wrap: wrap;
  align-items: center;
  ${(props) => media.greaterThan("sm")`
  padding-left:10%;
  width:80%;
  `}
`;

const Search = (props: Props) => {
  return (
    <Section>
      <NavBar />
      <CompanyLogo src="companyLogo.jpeg" alt="bluePrint" height="auto" />
      <SearchForm></SearchForm>
    </Section>
  );
};
export default Search;
