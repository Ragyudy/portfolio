import React, { useState, useEffect } from "react";
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
  font-family: "SofiaProBold", sans-serif;
  font-size: 4.5em;
  letter-spacing: 14px;
  text-align: center;
  transition: color 0.5s ease;
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%; /* Use left: 50% to center horizontally */
  width: 40vw;
  height: 30vw;
  background-color: #93aaff;
  z-index: -99;
  transform: translate(
    -50%,
    -50%
  ); /* Center both horizontally and vertically */
`;

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Grady Yu";

  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust this value to change typing speed

      return () => clearInterval(typingInterval);
    }, 250); // 1 second delay before typing starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundDiv />
      <StyledContainer>
        <Title>{text}</Title>
      </StyledContainer>
    </>
  );
};

export default Home;
