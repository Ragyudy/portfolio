import React, { useRef } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const StyledContainer = styled(Container)`
  padding-top: 10vh;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: unset;
  }
`;

const Header = styled.h3`
  font-size: 2em;
  color: #333;
`;

const Note = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledContainer id="projects" ref={ref}>
      <Header>PROJECTS</Header>
      <p style={{ color: "gray" }}>Coming soon...</p>
      <Note>
        Currently building a{" "}
        <StyledLink href="https://www.instagram.com/handsomedanyale/?hl=en">
          Handsome Dan
        </StyledLink>{" "}
        tracker with a couple of friends.
      </Note>
      <Note>
        Also making the new official website for the{" "}
        <StyledLink href="https://yalebadminton.netlify.app">
          {" "}
          Yale Badminton Club
        </StyledLink>
        .
      </Note>
    </StyledContainer>
  );
});

export default Projects;
