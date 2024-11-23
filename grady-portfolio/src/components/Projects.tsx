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

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledContainer id="projects" ref={ref}>
      <Header>PROJECTS</Header>
      <p style={{ color: "#4A4A4A" }}>more details coming soon...</p>
      <p>
        Currently building a{" "}
        <StyledLink href="https://github.com/Ragyudy/handsome-dan-tracker">
          Handsome Dan Tracker
        </StyledLink>
        .
      </p>
      <p>
        Also making a new official website for{" "}
        <StyledLink href="https://yalebadminton.com">Yale Badminton</StyledLink>
        .
      </p>
    </StyledContainer>
  );
});

export default Projects;
