import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Garamond';
    src: url('/fonts/Garamond/Garamond.eot');
    src: url('/fonts/Garamond/Garamond.woff2') format('woff2'),
      url('/fonts/Garamond/Garamond.woff') format('woff'),
      url('/fonts/Garamond/Garamond.ttf') format('truetype'),
      url('/fonts/Garamond/Garamond.svg#Garamond') format('svg'),
      url('/fonts/Garamond/Garamond.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SofiaProBold';
    src: url('/fonts/SofiaProBold/SofiaProBold.eot');
    src: url('/fonts/SofiaProBold/SofiaProBold.woff2') format('woff2'),
      url('/fonts/SofiaProBold/SofiaProBold.woff') format('woff'),
      url('/fonts/SofiaProBold/SofiaProBold.ttf') format('truetype'),
      url('/fonts/SofiaProBold/SofiaProBold.svg#SofiaProBold') format('svg'),
      url('/fonts/SofiaProBold/SofiaProBold.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SofiaProMedium';
    src: url('/fonts/SofiaProMedium/SofiaProMedium.eot');
    src: url('/fonts/SofiaProMedium/SofiaProMedium.woff2') format('woff2'),
      url('/fonts/SofiaProMedium/SofiaProMedium.woff') format('woff'),
      url('/fonts/SofiaProMedium/SofiaProMedium.ttf') format('truetype'),
      url('/fonts/SofiaProMedium/SofiaProMedium.svg#SofiaProMedium') format('svg'),
      url('/fonts/SofiaProMedium/SofiaProMedium.eot?#iefix') format('embedded-opentype');
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

  p, span, li, em {
    font-family: 'Garamond', 'Open Sans', sans-serif;
    letter-spacing: 1px;
    font-size: 17px;
	  line-height: 25px;
  }
`;

export default GlobalStyle;
