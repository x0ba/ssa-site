import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container fluid>
          <Row className="bg-primary text-white p-4">
            <Col mx-5>
              <Stack>
                <Image
                  src="/assets/android-chrome-512x512.png"
                  alt="SSA Logo"
                  className="footer-logo mb-2"
                  width={128}
                />
                <h4>
                  Symphonic Student <br /> Association
                </h4>
                <p>© 2025 SSA @ UCSD. All rights reserved.</p>
              </Stack>
            </Col>
            <Col>
              <Nav className="flex-column fs-8">
                <h4>Links</h4>
                <NavLink
                  href="https://discord.gg/PncDrAxvkS"
                  className="text-white"
                >
                  Discord
                </NavLink>
                <NavLink
                  href="https://www.instagram.com/ssa_at_ucsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-white"
                >
                  Instagram
                </NavLink>
                <NavLink
                  href="http://www.youtube.com/@symphonicstudentassociatio8977"
                  className="text-white"
                >
                  YouTube
                </NavLink>
                <NavLink
                  href="https://linktr.ee/ssa_at_ucsd"
                  className="text-white"
                >
                  Linktree
                </NavLink>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column fs-8">
                <h4>Contact Us!</h4>
                <NavLink href="mailto:symphoni@ucsd.edu" className="text-white">
                  symphoni@ucsd.edu
                </NavLink>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
