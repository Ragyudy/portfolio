import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("src/assets/images/cherry_blossom_landscape.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.1;
`;

export default BackgroundContainer;
