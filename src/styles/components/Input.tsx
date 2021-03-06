import React from "react";
import styled from "styled-components";
import media from "../media";

const Container = styled.div`
  ${media.lessThan("sm")`
  width: 30vw;
  `}
  display: flex;
  align-items: center;
  width: 18vw;
  min-width: 150px;
  height: ${(props) => props.theme.heights.middle};
  background-color: ${(props) => props.theme.colors.lightGrey};
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  border-radius: 3px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const TextInput = styled.input`
  flex: 1 0;
  min-width: 150px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.black};
  }
`;
interface IUserInput {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ value, handleChange, placeholder }: IUserInput) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};
export default Input;
