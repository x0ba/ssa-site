import { Row, Col, Card } from "react-bootstrap";
import { events } from "../../data/events";

const PastEvents = () => {
  return (
    <>
      <h2>Past Events</h2>

      <Row className="row1">
        {events
          .filter((event) => !event.upcoming)
          .map((event) => (
            <Col key={event.name} xs={12} sm={6} md={3} className="mb-4">
              <Card className="h-100 event-card">
                <Card.Img
                  variant="top"
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

export default PastEvents;
