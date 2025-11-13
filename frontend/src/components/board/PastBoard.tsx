import { Card, Row, Col } from "react-bootstrap";

const PastBoard = () => {
  return (
    <>
      <h1 className="alumni-title">Alumni</h1>
      <Row className="alumni-cards-row">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100 alumni-card">
            <Card.Body>
              <Card.Title>2025</Card.Title>
              <p>Laura Fleig (President)</p>
              <p>Sunwoo Baik (Vice President External)</p>
              <p>Elsa Wang (Vice President Internal)</p>
              <p>Ariel Anchanattu (Ensemble Chair)</p>
              <p>Harmony Schwartz (Publicity Chair)</p>
              <p>Jenny Xue (Publicity Chair)</p>
              <p>Yi Fu (Finance Chair)</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100 alumni-card">
            <Card.Body>
              <Card.Title>2024</Card.Title>
              <p>Ross Greer (Advisor, Ensemble Director)</p>
              <p>Christine Hsu (President)</p>
              <p>Roxy Ong (Secretary)</p>
              <p>Juliana Tran (Vice President External)</p>
              <p>Kailey Wong (Webmaster)</p>
              <p>Augie Resendiz (External Committee)</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100 alumni-card">
            <Card.Body>
              <Card.Title>2023</Card.Title>
              <p>Gaby Carr (President)</p>
              <p>Sian Hong (External Committee)</p>
              <p>Timothy Lin (External Committee)</p>
              <p>Timothy McAfee (Secretary)</p>
              <p>Max Mata (External Committee)</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100 alumni-card">
            <Card.Body>
              <Card.Title>2022</Card.Title>
              <p>Isaac Cabrera (Co-Founder, Vice President, AV Chair)</p>
              <p>Merry Jiao (AV Intern)</p>
              <p>Terry Feng (Vice President Internal)</p>
              <p>Sayan Sarkar (Vice President Internal)</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100 alumni-card">
            <Card.Body>
              <Card.Title>2021</Card.Title>
              <p>Victoria Zhang (Co-Founder, President)</p>
              <p>Andres De La Rosa (Ensemble Chair)</p>
              <p>Yoyo Yeh (Secretary)</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100 alumni-card">
            <Card.Body>
              <Card.Title>2019</Card.Title>
              <p>Jasmine Tu (Publicity Chair)</p>
              <p>Sabrina Chuang (Design Chair)</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100 alumni-card">
            <Card.Body>
              <Card.Title>2018</Card.Title>
              <p>Seema Ahmed (Event Director)</p>
              <p>Sadie Swift (Publicity Chair)</p>
              <p>Gabe Alzate (Treasurer)</p>
              <p>Stephanie Cheng (Secretary)</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PastBoard;
