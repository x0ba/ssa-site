import { Card, Row, Col, Container } from "react-bootstrap";
import { boardMembers } from "../data/boardMembers";

const BoardCards = () => {
  return (
    <Container fluid>
      <h1>Meet our board!</h1>
      <Row className="row1">
        {boardMembers.map((member) => (
          <Col key={member.name} xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={member.imageUrl}
                alt={`${member.name} photo`}
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {[member.position, member.pronouns, member.year]
                    .filter(Boolean)
                    .join(" • ")}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Major:</strong> {member.major}
                  {member.minor ? (
                    <>
                      <br />
                      <strong>Minor:</strong> {member.minor}
                    </>
                  ) : null}
                  <br />
                  <strong>Instrument:</strong> {member.instrument}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BoardCards;
