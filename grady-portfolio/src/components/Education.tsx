import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { educations } from "../util/constants";
import styled from "styled-components";

// Define a StyledContainer with a max-width
const StyledContainer = styled(Container)`
  max-width: 1000px; /* Constrain width */
  margin: 0 auto; /* Center the container */
  height: 100vh;
`;

const SectionTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const EducationContainer = styled.div`
  padding-top: 12vh;
  min-height: 200px;
`;

const EducationRow = styled(Row)`
  margin-bottom: 30px;
`;

const SchoolTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.25rem;
`;

const Degree = styled.p`
  font-style: italic;
  margin-bottom: 5px;
  font-size: 1rem;
`;

// const Date = styled.p`
//   font-size: 0.9rem;
//   color: gray;
//   margin-bottom: 15px;
// `;

const ListTitle = styled.h4`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const CourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CourseCard = styled.div`
  display: inline-block;
  padding: 7px 7px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  font-size: 0.85rem;
  white-space: nowrap;
  color: gray;
`;

function Education() {
  return (
    <StyledContainer id="education">
      <EducationContainer>
        <Row>
          <Col md={4}>
            <SectionTitle>Education</SectionTitle>
          </Col>
          <Col md={8}>
            {educations.map((education, index) => (
              <EducationRow key={index}>
                <Col md={12}>
                  <SchoolTitle>{education.school}</SchoolTitle>
                  <Degree>{education.degree}</Degree>
                  {/* <Date>{education.date}</Date> */}
                  {education.courses && (
                    <>
                      <ListTitle>Relevant Coursework</ListTitle>
                      <CourseContainer>
                        {education.courses.map((course, index) => (
                          <CourseCard key={index}>{course}</CourseCard>
                        ))}
                      </CourseContainer>
                    </>
                  )}
                  {education.activities && (
                    <>
                      <ListTitle>Activities</ListTitle>
                      <CourseContainer>
                        {education.activities.map((activity, index) => (
                          <CourseCard key={index}>{activity}</CourseCard>
                        ))}
                      </CourseContainer>
                    </>
                  )}
                </Col>
              </EducationRow>
            ))}
          </Col>
        </Row>
      </EducationContainer>
    </StyledContainer>
  );
}

export default Education;
