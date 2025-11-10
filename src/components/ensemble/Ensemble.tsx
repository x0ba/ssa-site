import { Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../NavBar";
import EnsembleCarousel from "./EnsembleCarousel";
import EnsembleDescription from "./EnsembleDescription";
import VideoEmbeds from "./VideoEmbeds";

const Ensemble = () => {
  return (
    <>
      <NavBar selectedItem="Ensemble" />
      <Container fluid className="ensemble-content">
        <h1>Ensemble</h1>
        <Row>
          <EnsembleCarousel />
          <EnsembleDescription />
        </Row>
        <VideoEmbeds />
      </Container>
      <Footer />
    </>
  );
};

export default Ensemble;
