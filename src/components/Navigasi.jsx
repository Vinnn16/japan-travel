import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigasi.css";

function Navigasi() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarClass = isHome && !scrolled ? "navbar-home" : "navbar-solid";

  const links = [
    { to: "/", label: "Home" },
    { to: "/destinations", label: "Destinations" },
    { to: "/about", label: "About" },
    { to: "/review", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`konten-navbar ${navbarClass}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <div className="brand-icon">🗾</div>
          <span>Japan Travel</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            {links.map((link) => (
              <Nav.Link
                key={link.to}
                as={Link}
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-cta"
              onClick={() => setExpanded(false)}
            >
              Book Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
