import React from "react";
import { Burger } from "../styles/components";
import { Cutlet } from "../styles/components/Burger";
type Props = { isOpen: boolean };




const Hamburger = ({isOpen}: Props) => {
  console.log(isOpen);
  return (
    <>
      <Burger isOpen={isOpen}>
        <Cutlet  className="cutlet1"></Cutlet>
        <Cutlet  className="cutlet2"></Cutlet>
        <Cutlet  className="cutlet3"></Cutlet>
      </Burger>
    </>
  );
};
export default Hamburger;
