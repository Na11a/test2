import React from "react";
import styled from "styled-components";
import { H3 } from "../styles/components";
import StyledSection from "../styles/components/Section";

type Props = {};
const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
`;
const StyledInput = styled.input`
  margin-top:1vh;
  background-color:grey;
  border-radius:3px;
  border:none;
  outline:none;
  padding: 5px 15px;
  font-size:${(props) => props.theme.fontSizes.medium};
  &::placeholder{
    text-transform:capitalize;
    color:white;
  }
`
const StyledButton = styled.button`
 width:20%;
 margin-top:20px;
 background-color:${(props) => props.theme.colors.blue};
 color:${(props) => props.theme.colors.white};
 text-transform:uppercase;
 cursor:pointer;
 font-size:${(props) => props.theme.fontSizes.small};
 border:none;
 outline:none;
 height:${(props) => props.theme.heights.middle};
 border-radius:5px;
`

const ContactUs = (props: Props) => {
  return (
    <StyledSection>
      <H3>contact us</H3>
    <StyledForm name="contact-us">
      <StyledInput placeholder="name" name="name" type='text'></StyledInput>
      <StyledInput placeholder="email" name="email" type='text'></StyledInput>
      <StyledInput placeholder="subject" name="subject" type='text'></StyledInput>
      <StyledInput placeholder="message" name="message" type='text' style={{paddingBottom:"20vh"}}></StyledInput>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
    </StyledSection>
  );
};
export default ContactUs;
