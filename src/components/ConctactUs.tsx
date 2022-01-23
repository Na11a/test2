import React from "react";
import styled from "styled-components";
import { Button, Input } from "../styles/components";

type Props = {};
const StyledForm = styled.form`
  display: flex;
`;

const ContactUs = (props: Props) => {
  return (
    <StyledForm>
      <Input></Input>
      <Button>Sumbit</Button>
    </StyledForm>
  );
};
export default ContactUs;
