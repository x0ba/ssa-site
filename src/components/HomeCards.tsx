import { Card, Col, Row, Container } from "react-bootstrap";
import { Music2, Calendar, Users } from "lucide-react";

const HomeCards = () => {
  return (
    <>
      <Container fluid>
        <Row className="cards-row1">
          <Col className="flex-column">
            <Card className="card-1">
              <Card.Body>
                <Music2 size={48} className="music-icon" />
                <Card.Title>Weekly Rehearsals</Card.Title>
                <Card.Text>
                  Join us every Wednesday evening for collaborative music-making
                  and skill development, as well as preparation for concerts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-2">
              <Card.Body>
                <Calendar size={48} className="calendar-icon" />
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
          <Card className="card-3">
            <Card.Body>
              <Users size={48} className="users-icon" />
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

export default HomeCards;
