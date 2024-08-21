import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400; 
  }

  p, span, li {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300; 
  }
`;

export default GlobalStyle;
