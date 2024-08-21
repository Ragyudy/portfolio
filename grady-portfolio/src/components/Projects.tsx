import React, { useRef } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const StyledContainer = styled(Container)`
  padding-top: 10vh;
  margin: 0 auto;
  max-width: 1000px;
  height: 100vh;
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

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledContainer id="projects" ref={ref}>
      <Header>PROJECTS</Header>
      <ComingSoon>Coming soon...</ComingSoon>
    </StyledContainer>
  );
});

export default Projects;
