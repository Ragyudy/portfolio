import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'brandon-grotesque', 'Open Sans', sans-serif;
    font-weight: 400; 
  }
    
  h1, h2, h3, h4, h5, h6 {
    font-family: 'brandon-grotesque', 'Open Sans', sans-serif;
  }

  p, span, li {
    font-family: 'brandon-grotesque', 'Open Sans', sans-serif;
    font-weight: 300; 
  }
`;

export default GlobalStyle;
