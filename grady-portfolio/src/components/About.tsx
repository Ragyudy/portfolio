import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import pfp from "../images/grady_headshot2.jpeg";

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
  margin-bottom: 30px;
  font-size: 2em;
  color: #333;
`;

const SubText = styled.p`
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 40px;
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPfp = styled.img`
  border-radius: 2%;
  width: 100%;
  max-width: 55vh; /* Adjust to match pfp */
  height: auto;
`;

const IntroText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledContainer id="about" ref={ref}>
      <Header>ABOUT ME</Header>
      <SubText>
        <em>
          Seeking opportunities in software engineering, machine learning, and
          data science. Also interested in exploring more the intersection
          between CS and animation.
        </em>
      </SubText>
      <Row>
        <ImageCol md={6}>
          <StyledPfp src={pfp} alt="Grady's headshot" />
        </ImageCol>
        <Col md={6}>
          <IntroText>
            Hi, I'm Grady! I'm a sophomore at Yale studying Computer Science. I
            have research experience from working in multiple CS labs throughout
            high school and college and am currently looking for tech
            internships for Summer 2025.
          </IntroText>
          <IntroText>
            I'm currently a student researcher at the{" "}
            <StyledLink href="https://vision.cs.yale.edu/">
              Yale Vision Laboratory
            </StyledLink>
            , where I'm working on all-weather removal. I'm also a developer on
            the RoomAdvisor Team at the{" "}
            <StyledLink href="https://yalecomputersociety.org/">
              Yale Computer Society
            </StyledLink>{" "}
            and an organizer for{" "}
            <StyledLink href="https://yhack.org/">YHack</StyledLink>.
          </IntroText>
          <IntroText>
            In my free time, I enjoy playing badminton, practicing guitar, and
            working on side projects. I'm always looking for opportunities to
            learn and grow!
          </IntroText>
        </Col>
      </Row>
    </StyledContainer>
  );
});

export default About;
