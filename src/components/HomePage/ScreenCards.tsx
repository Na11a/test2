import React from "react";
import styled from "styled-components";
import { ScreenCard } from ".";
import { media } from "../../styles";
import { ImageWrapper } from "../../styles/components";

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
    width:80%;
    flex-direction:row;
    text-align:center;
    flex-wrap:wrap;
    align-items:top;
    justify-content:space-between;

  `}
`;
interface IStyledBlock{
  width?:string;
}
const StyledBlock = styled.div<IStyledBlock>`
  ${(props) => media.greaterThan("sm")`
    width: ${props.width || '300px'};
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    flex-grow:1;
    `}
`;
const ScreenCards = (props: Props) => {
  return (
    <StyledSection>
      <StyledBlock width="500px">
        <ImageWrapper
          src="screens.jpg"
          alt="screens"
          width="auto"
          height="auto"
        ></ImageWrapper>
      </StyledBlock>
      <StyledBlock>
        {data &&
          data.map((tablet: ITablet,index) => (
            <ScreenCard key={index} tablet={tablet}></ScreenCard>
          ))}
      </StyledBlock>
    </StyledSection>
  );
};
export default ScreenCards;

