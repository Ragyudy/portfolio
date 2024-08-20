import React from "react";
import StyledContainer from "./StyledStuff";
import styled from "styled-components";

const Header = styled.h3`
  font-size: 2em;
  color: #333;
  margin-top: 10vh;
`;

const ComingSoon = styled.p`
  color: gray;
`;

const Projects = () => {
  return (
    <StyledContainer id="projects">
      <Header>Projects</Header>
      <ComingSoon>Coming soon...</ComingSoon>
    </StyledContainer>
  );
};

export default Projects;
