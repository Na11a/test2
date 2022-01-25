import { pxToRem } from "./convector";
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
export interface ITheme {
  colors: IColors;
  fontSizes: IFontSizes;
  widths: IWidth;
  heights: IHeight;
}
interface IColors {
  powderWhite: string;
  persianGreen: string;
  lightBlue: string;
  onyx: string;
  blue: string;
  white: string;
  aquaBlue: string;
  black: string;
  lightGrey: string;
  footerH:string;
}
interface IFontSizes {
  small: string;
  medium: string;
  large: string;
  h3:string;
  h3Desktop:string;
  footerText:string;
  h2:string;
  mainText:string;
  buttonText:string;
}
interface IWidth {
  small: string;
  middle: string;
  upperMiddle: string;
}
interface IHeight {
  small: string;
  middle: string;
  upperMiddle: string;
}

const theme: ITheme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    lightGrey: "#d3d3d3",
    blue: "#00f",
    white: "#fff",
    aquaBlue: "#00FFFF",
    black: "#000",
    footerH:"#47424F"
  },
  fontSizes: {
    small: pxToRem(14),
    medium: pxToRem(20),
    large: pxToRem(32),
    h3:pxToRem(20.8),
    h3Desktop:pxToRem(15),
    footerText:pxToRem(13),
    h2:pxToRem(48),
    mainText:pxToRem(18),
    buttonText:pxToRem(24),
  
  },
  widths: {
    small: "6vw",
    middle: "10vw",
    upperMiddle: "12vw",
  },
  heights: {
    small: "2vh",
    middle: "4vh",
    upperMiddle: "6vh",
  },
};

export default theme;
