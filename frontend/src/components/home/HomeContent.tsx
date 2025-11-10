import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { Stars } from "lucide-react";

const HomeContent = () => {
  return (
    <Container fluid className="horizontal-container">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-content">
          <Badge bg="dark" className="date">
            <Stars size={18} /> est. 2018
          </Badge>
          <div className="club-title">
            <span>Symphonic</span> <br />
            <span>Student</span> <br />
            <span>Association</span> <br />
            <span>@ UCSD</span> <br />
            <p className="description">
              UCSD's classical music-oriented student organization dedicated to
              bringing together classical musicians and music enjoyers from all
              backgrounds and disciplines!
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src="/assets/hero.jpg"
            alt="SSA Ensemble"
            className="hero-image"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
