import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import pfp from "../images/grady_headshot.jpeg";

const StyledContainer = styled(Col)`
  padding: 0;
  margin: 0 auto;
  min-height: calc(100vh - 56px);

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: null;
  }
`;

const StyledContent = styled(Row)`
  padding-top: 23vh;
  margin: 0 auto;

  @media (max-width: 576px) {
    padding-top: 0px;
  }
`;

const StyledName = styled(Row)`
  padding-left: 10vh;
  margin: 0 auto;
  font-size: 60px;
  line-height: 1.5;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 75px;
  line-height: 1.5;
  text-align: center;
`;

function Home() {
  return (
    <StyledContainer>
      <StyledContent>
        <Col md={8}>
          <StyledName>
            Hi! My name is Grady and I'm a second-year computer science student
            at Yale.
          </StyledName>
        </Col>
        <Col md={4} style={{ minHeight: "200px" }}>
          {" "}
          <img src={pfp} style={{ borderRadius: 50 }}></img>
        </Col>
      </StyledContent>
    </StyledContainer>
  );
}

export default Home;
