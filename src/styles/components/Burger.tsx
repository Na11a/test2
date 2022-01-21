import styled from "styled-components";
import { media } from "..";

interface BurgerProps {
  isOpen?: Boolean;
}
const Burger = styled.div<BurgerProps>`
  display: block;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  div {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
  }
  ${media.greaterThan("sm")`
  display:none;
`}
`;
export const Cutlet = styled.div`
  display: block;
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: #000;
  transform-origin: 1px;
  transition: all 0.3s linear;

  ${media.greaterThan("sm")`
  display:none;
`}
`;
export default Burger;
