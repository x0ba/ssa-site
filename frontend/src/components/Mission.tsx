import { Row, Container, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Mission = () => {
  return (
    <>
      <NavBar selectedItem="Our Mission" />
      <Container className="mission-content" fluid>
        <h1>Our Mission</h1>
        <Row>
          <Col xs={12} md={5} lg={4}>
            <img
              src="/assets/mission.jpg"
              alt="A picture of SSA members at the beach"
            />
          </Col>
          <Col xs={12} md={7} lg={8}>
            <p>
              The Symphonic Student Association at UC San Diego (SSA) is a
              student-run organization committed to fostering a community for
              students and community members who share an interest in classical
              music. SSA also strives to make classical music more accessible in
              the community by presenting regular free concerts and workshops
              both on and off campus. SSA primarily rehearses its own chamber
              ensembles and presents yearly showcases at the Che Cafe (and more
              recently also at UCSD's Epstein Family Amphitheater). SSA selects
              music from various genres within classical music and aims to
              provide a great experience for both musicians and the audience
              regardless of prior exposure to classical music. SSA is also the
              primary social platform for the UCSD Chamber Orchestra and hosts
              social events open to the entire UCSD community. In addition, SSA
              regularly performs at various gigs, local senior homes, and
              children's centers. We have ways for you to be involved with SSA
              whether or not you play an instrument or not! You can subscribe to
              our newsletter, join our Discord, and follow us on Instagram! We
              hope to see you around!
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Mission;
