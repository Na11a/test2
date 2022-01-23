import { createGlobalStyle } from "styled-components";
import { media } from ".";

const GlobalStyle = createGlobalStyle`
+ {
    margin:0;
    padding:0;
    font-family:font-family: Ubuntu, "times new roman", times, roman, serif;
}    
body{    
    width:80vw;
    padding-left:10vw;
}   
`;
export default GlobalStyle;
