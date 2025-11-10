import { Card, Col, Row, Container } from "react-bootstrap";
import { Music2, Calendar, Users } from "lucide-react";

const HomeCards = () => {
  return (
    <>
      <Container fluid>
        <Row className="cards-row1">
          <Col xs={12} md={6} lg={4} className="mb-4 mb-lg-0">
            <Card className="card-1 h-100">
              <Card.Body>
                <Music2 size={48} className="music-icon" />
                <Card.Title>Weekly Rehearsals</Card.Title>
                <Card.Text>
                  Join us every Wednesday evening for music-making and social
                  opportunities in preparation for quartely performances.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4 mb-md-3 mb-lg-0">
            <Card className="card-2 h-100">
              <Card.Body>
                <Calendar size={48} className="calendar-icon" />
                <Card.Title>Quarterly Concerts</Card.Title>
                <Card.Text>
                  Perform once a quarter in various venues across campus and
                  share music with the community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={4} className="mb-4 mb-md-0">
            <Card className="card-3 h-100">
              <Card.Body>
                <Users size={48} className="users-icon" />
                <Card.Title>Community Vibes</Card.Title>
                <Card.Text>
                  Connect with fellow classical music enthusiasts through
                  rehearsals, performances, and various social opportunities
                  throughout the year and build lasting friendships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeCards;
