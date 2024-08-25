import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'sketch_3d';
    src: url('src/assets/fonts/Sketch_3D.woff') format('woff'), url('src/assets/fonts/Sketch_3D.otf') format('opentype'); 
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'meatloaf';
    src: url('src/assets/fonts/Meatloaf-65Pq.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

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
