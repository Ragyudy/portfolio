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

const ComingSoon = styled.p`
  color: gray;
`;

const Note = styled.p`
  font-size: 1.2em;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledContainer id="projects" ref={ref}>
      <Header>PROJECTS</Header>
      <ComingSoon>Coming soon...</ComingSoon>
      <Note>
        Currently building a{" "}
        <a href="https://www.instagram.com/handsomedanyale/?hl=en">
          Handsome Dan
        </a>{" "}
        tracker with a couple of friends.
      </Note>
      <Note>
        Also making the new official website for the{" "}
        <a href="https://yalebadminton.netlify.app"> Yale Badminton Club </a>.
      </Note>
    </StyledContainer>
  );
});

export default Projects;
