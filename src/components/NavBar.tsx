import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export interface NavItem {
  text: string;
  link: string;
}

const NavItems: NavItem[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Ensemble",
    link: "#",
  },
  {
    text: "Join",
    link: "#",
  },
];

const NavBarComponent = () => {
  const [selected, setSelected] = useState("Home");

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/assets/android-chrome-512x512.png"
            alt="SSA Logo"
            className="d-inline-block align-text-top navbar-logo"
          />
          {" SSA @ UCSD"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NavItems.map((item) => (
              <Nav.Link
                key={item.text}
                href={item.link}
                active={selected === item.text}
                onClick={() => setSelected(item.text)}
              >
                {item.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
