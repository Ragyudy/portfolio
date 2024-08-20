import React from "react";
import Container from "react-bootstrap/Container";
import Typewriter from "react-typewriter-effect";
import styled from "styled-components";

// const StyledContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh; /* Full viewport height */
//   margin: 0;
//   color: #333;
//   background-color: #f0ffff;
//   overflow: hidden;
// `;

const StyledContainer = styled(Container)`
  margin: 0 auto;
  max-width: 1000px;
  justify-content: center;
  display: flex;
  height: 100vh; /* Full viewport height */
  color: #333;
  align-items: center;
  text-align: center; /* Center text within the container */

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: unset;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
`;

function Home() {
  return (
    <StyledContainer>
      <Title>
        <Typewriter
          text="Welcome to Grady's personal website :)"
          cursorColor="#000" // Cursor color
          typeSpeed={100} // Speed of typing (in ms)
          delay={1000} // Delay before typing starts (in ms)
        />
      </Title>
    </StyledContainer>
  );
}

export default Home;
