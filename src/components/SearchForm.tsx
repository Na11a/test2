import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useTypeSelector } from "../hooks/UseTypeSelector";
import { FilterActions, IAction } from "../store/actions/filterActions";
import { Button, Input } from "../styles/components";

type Props = {};
const StyledForm = styled.form`
  display: flex;
`;
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align: center;
  text-transform: uppercase;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
`;
const SearchForm = (props: Props) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setValue(value);
  };
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    const ActionObject: IAction = {
      type: FilterActions.FETCH_FILTER,
      payload: value,
    };
    dispatch(ActionObject);
    setValue("");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        value={value}
        handleChange={handleChange}
        placeholder="Search Our Website..."
      ></Input>
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};
export default SearchForm;
