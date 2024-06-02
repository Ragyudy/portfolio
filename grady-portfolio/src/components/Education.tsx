import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { educations } from "../util/constants";

function Education() {
  return (
    <Container id="education" style={{ paddingTop: 50, minHeight: 200 }}>
      <Row>
        <Col md={4} style={{ minHeight: 200, fontWeight: 700 }}>
          Education
        </Col>
        <Col md={8}>
          {educations.map((education) => (
            <Row>
              <Col md={6}>{education.school}</Col>
              <Col md={6}>{education.loc}</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
