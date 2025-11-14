import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router";

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

const NavBar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  // Determine which item is selected based on current route
  const isActive = (link: string) => {
    if (link === "/") {
      return location.pathname === "/";
    }
    return location.pathname === link;
  };

  return (
    <Navbar expand="lg" className="navbar bg-primary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/nav-icon.webp"
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
                as={Link}
                to={item.link}
                active={isActive(item.link)}
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
                  as={Link}
                  to={item.link}
                  key={item.text}
                  active={isActive(item.link)}
                >
                  {item.text}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link
            as={Link}
            to="/dashboard"
            className="dashboard-link"
            active={isActive("/dashboard")}
          >
            Dashboard
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
