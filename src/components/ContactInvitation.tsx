import React from "react";
import styled from "styled-components";
import { media } from "../styles";
import { pxToRem } from "../styles/convector";

type Props = {};
const StyledSection = styled.section`
  padding: 0 80px 50px 80px;
  margin: 0% 10% 5% 10%;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: ${(props) => props.theme.colors.lightGrey};
  position: relative;
  &:before {
    content: "";
    left: 0px;
    position: absolute;
    padding-right: 15px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.blue};
  }
  ${(props) => media.greaterThan("sm")`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0px 85px 0 100px;
    margin: 0 10% 3% 10%;
    &:before {
        top:0px;
      }
  `}
`;
const StyledTitle = styled.h3`
  font-size: ${pxToRem(44)};
  line-height: ${pxToRem(44)};
  padding: 20px 0 0 0;
  margin: 0;
`;
const StyledDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.mainText};
  color: ${(props) => props.theme.colors.onyx};
  padding-bottom: 80px;
  ${(props) => media.greaterThan("sm")`
      padding:0px;
  `}
`;
const StyledButton = styled.button`
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.blue};
  font-size: ${pxToRem(32)};
`;
const StyledBlock = styled.div``;

const ContactInvitation = (props: Props) => {
  return (
    <StyledSection>
      <StyledBlock>
        <StyledTitle>Lorem ipsum dolor sit amet elit!</StyledTitle>
        <StyledDescription>
          Why not try our services today, you won`t regret your choice
        </StyledDescription>
      </StyledBlock>
      <StyledButton onClick={(e) => e.preventDefault()}>
        Contact us today
      </StyledButton>
    </StyledSection>
  );
};
export default ContactInvitation;
