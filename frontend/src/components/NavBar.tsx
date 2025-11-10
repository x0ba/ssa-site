import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export interface Props {
  selectedItem: string;
}

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
    link: "/events",
  },
  {
    text: "Ensemble",
    link: "/ensemble",
  },
  {
    text: "Join",
    link: "/join",
  },
];

const DropdownItems: NavItem[] = [
  {
    text: "Our Mission",
    link: "/mission",
  },
  {
    text: "Board Members",
    link: "/board",
  },
  {
    text: "Support",
    link: "/support",
  },
];

const NavBar = ({ selectedItem }: Props) => {
  const [selected, setSelected] = useState(selectedItem);
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <Navbar expand="lg" className="navbar bg-primary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/assets/favicon/android-chrome-512x512.png"
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
            <NavDropdown
              title="About"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              {DropdownItems.map((item) => (
                <NavDropdown.Item
                  href={item.link}
                  key={item.text}
                  active={selected === item.text}
                  onClick={() => setSelected(item.text)}
                >
                  {item.text}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
