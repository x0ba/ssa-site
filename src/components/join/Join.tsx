import NavBar from "../NavBar";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

const Join = () => {
  return (
    <>
      <NavBar selectedItem="Join" />
      <Container fluid className="join-content">
        <h1>Join Us</h1>
        <p>
          We'd love to have you at an SSA rehearsal or event! Join us by: <br />
          <ul>
            <li>
              <a href="https://www.instagram.com/ssa_at_ucsd">
                Following us on Instagram
              </a>
            </li>
            <li>
              <a href="https://discord.gg/kDqHjKeUhJ">
                Joining our Discord server
              </a>
            </li>
            <li>Subscribing to our mailing list below</li>
          </ul>
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/viewform?embedded=true"
          width="640"
          height="629"
        >
          Loading…
        </iframe>
      </Container>
      <Footer />
    </>
  );
};

export default Join;
