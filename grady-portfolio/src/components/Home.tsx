import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import pfp from "../images/grady_headshot.jpeg";

const StyledContainer = styled(Container)`
  padding-top: 5vh;
  margin: 0 auto;
  min-height: calc(100vh - 100px);

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: null;
  }
`;

const StyledPfp = styled.img`
  border-radius: 50px;
  width: 100%;
  justify-content: center;
  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: null;
  }
`;

function Home() {
  return (
    <StyledContainer>
      <Row>
        <Col md={8}>
          <Row style={{ fontSize: 30 }}>
            Hi! My name is Grady and I'm a second-year computer science student
            at Yale.
          </Row>
        </Col>
        <Col md={4} style={{ minHeight: "200px" }}>
          <StyledPfp src={pfp}></StyledPfp>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default Home;
