import styled from "styled-components";
import { media } from "..";

const StyledSection = styled.section`
  margin: 0px;
  width: 100%;
  ${media.greaterThan("sm")`
    width:300px;
`};
`;
export default StyledSection;
