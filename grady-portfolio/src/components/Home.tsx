import React from "react";
import Container from "react-bootstrap/Container";
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
  position: relative;

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  font-size: 10em;
  font-weight: bold;
  text-align: center;
  font-family: "sans-serif";
  letter-spacing: 0.1em;
  color: #00356b;
  transition: color 0.5s ease;

  &:hover {
    color: #286dc0;
  }

  // phone
  @media (max-width: 576px) {
    font-size: 5.5em;
    word-break: break-word;
  }
`;

const Home = () => {
  return (
    <StyledContainer>
      <Title>Grady Yu</Title>
    </StyledContainer>
  );
};

export default Home;
