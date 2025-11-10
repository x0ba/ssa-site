import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Support = () => {
  return (
    <>
      <NavBar selectedItem="Support" />
      <Container fluid className="support-content">
        <h1>Support Us</h1>
        <p>
          The best way to support SSA is by attending our concerts and events
          throughout the year! You can also help spread our mission by promoting
          music education on campus, encouraging friends to participate in our
          programs, and advocating for student organization funding during UCSD
          student body elections. If you would like to provide financial
          support, please Venmo <span className="venmo-tag">@ssaucsd</span>.
          Thank you for helping us spread our love of classical music with the
          UCSD community!
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default Support;
