import React from "react";
import styled from "styled-components";
import { ScreenCard } from ".";
import { media } from "../styles";
import { ImageWrapper } from "../styles/components";

type Props = {};
export interface ITablet {
  src?: string;
  title?: string;
  description?: string;
}

const data: ITablet[] = [
  {
    src: "tablet_screen.jpg",
    title: "vivamuslibero augue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet at neque rutrum elementum.",
  },
  {
    src: "tablet_screen.jpg",
    title: "vivamuslibero augue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet at neque rutrum elementum.",
  },
  {
    src: "tablet_screen.jpg",
    title: "vivamuslibero augue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet at neque rutrum elementum.",
  },
  {
    src: "tablet_screen.jpg",
    title: "vivamuslibero augue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet at neque rutrum elementum.",
  },
];
const StyledSection = styled.section`
  padding: 50px 10px;
  ${(props) => media.greaterThan("sm")`
    display:flex;
    padding:5% 10%;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:top;
    justify-content:space-between;

  `}
`;
const StyledBlock = styled.div`
  ${(props) => media.greaterThan("sm")`
    width: 50%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;

    `}
`;
const ScreenCards = (props: Props) => {
  return (
    <StyledSection>
      <StyledBlock>
        <ImageWrapper
          src="screens.jpg"
          alt="screens"
          width="100%"
          height="auto"
        ></ImageWrapper>
      </StyledBlock>
      <StyledBlock>
        {data &&
          data.map((tablet: ITablet) => (
            <ScreenCard tablet={tablet}></ScreenCard>
          ))}
      </StyledBlock>
    </StyledSection>
  );
};
export default ScreenCards;
function tablet(tablet: any): React.ReactNode {
  throw new Error("Function not implemented.");
}
