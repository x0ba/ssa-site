import { events } from "../../data/events";
import { Row, Col, Card } from "react-bootstrap";

const UpcomingEvents = () => {
  return (
    <>
      <h2>Upcoming Events</h2>

      <Row className="row1">
        {events
          .filter((event) => event.upcoming)
          .map((event, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <Card className="h-100 event-card">
                <Card.Img
                  variant="top"
                  loading="lazy"
                  src={event.flyerUrl}
                  alt={`${event.name} flyer`}
                />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {event.date}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default UpcomingEvents;
