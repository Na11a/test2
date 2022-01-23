import React from "react";
import styled from "styled-components";
import { Button, Input } from "../styles/components";

type Props = {};
const StyledForm = styled.form`
  display: flex;
`;

const SearchForm = (props: Props) => {
  return (
    <StyledForm>
      <Input></Input>
      <Button>Search</Button>
    </StyledForm>
  );
};
export default SearchForm;
