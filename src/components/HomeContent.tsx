import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { Stars } from "lucide-react";

const HomeContent = () => {
  return (
    <Container fluid className="horizontal-container">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-content">
          <Badge bg="primary" className="date">
            <Stars size={18} /> est. 2018
          </Badge>
          <div className="club-title">
            <span className="text-danger">Symphonic</span> <br />
            <span className="text-secondary">Student</span> <br />
            <span className="text-pink">Association</span> <br />
            <span className="text-secondary">@ UCSD</span> <br />
            <p className="description">
              UCSD's premier student organization dedicated to bringing together
              musicians, music lovers, and anyone who wants to experience the
              magic of symphonic music.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src="/assets/hero.jpg"
            alt="SSA Ensemble"
            className="hero-image border-primary"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
