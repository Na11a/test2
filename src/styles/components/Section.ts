import styled from "styled-components";
import { media } from "..";

const StyledSection = styled.section`
  padding: 0px;
  margin: 0px;
  width: 100%; 
  ${media.greaterThan("sm")`
    width:300px;
    margin-left:2vw; 
`};
`;
export default StyledSection;
