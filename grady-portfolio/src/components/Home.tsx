import React from "react";
import Container from "react-bootstrap/Container";
import Typewriter from "react-typewriter-effect";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin: 0 auto;
  max-width: 1000px;
  justify-content: center;
  display: flex;
  height: 100vh;
  color: #333;
  align-items: center;
  text-align: center;

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
          cursorColor="#000"
          typeSpeed={100}
          delay={1000}
        />
      </Title>
    </StyledContainer>
  );
}

export default Home;
