import { Button, Card, Col, Row, Container } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Container fluid>
        <Row className="cards-row1">
          <Col className="flex-column">
            <Card
              className="card-1"
              style={{ width: "18rem", height: "10rem" }}
            >
              <Card.Body>
                <Card.Title>Weekly Rehearsals</Card.Title>
                <Card.Text>
                  Join us every Wednesday evening for collaborative music-making
                  and skill development, as well as preparation for concerts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-2" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Quarterly Concerts</Card.Title>
                <Card.Text>
                  Perform in stunning venues across campus and share music with
                  the community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="cards-row2">
          <Card className="card-3" style={{ width: "47rem", height: "6rem" }}>
            <Card.Body>
              <Card.Title>Community Vibes</Card.Title>
              <Card.Text>
                Connect with fellow music enthusiasts and build lifelong
                friendships.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
