import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";

import {
  MessageCircle,
  Instagram,
  Youtube,
  TreePalm,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container fluid>
          <Row className="footer-content p-4">
            <Col mx-5="true">
              <Stack>
                <Image
                  src="/assets/nav-icon.webp"
                  alt="SSA Logo"
                  className="footer-logo mb-2"
                  width={128}
                  height={128}
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
                  className="footer-link"
                >
                  <MessageCircle size={18} /> Discord
                </NavLink>
                <NavLink
                  href="https://www.instagram.com/ssa_at_ucsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="footer-link"
                >
                  <Instagram size={18} /> Instagram
                </NavLink>
                <NavLink
                  href="http://www.youtube.com/@symphonicstudentassociatio8977"
                  className="footer-link"
                >
                  <Youtube size={18} /> YouTube
                </NavLink>
                <NavLink
                  href="https://linktr.ee/ssa_at_ucsd"
                  className="footer-link"
                >
                  <TreePalm size={18} /> Linktree
                </NavLink>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column fs-8">
                <h4>Contact Us!</h4>
                <NavLink
                  href="mailto:symphoni@ucsd.edu"
                  className="footer-link"
                >
                  <Mail size={18} /> Email
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
