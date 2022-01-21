import styled from "styled-components";
import { media } from "..";
type UlProps = {
    open: boolean;
  };
  
const Ul = styled.ul<UlProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: left;
  box-shadow: 0px 3px 5px gray;
  ${({ open }) => media.lessThan("sm")`
    display:${open ? "block" : "none"};
  `}
`;
export default Ul;