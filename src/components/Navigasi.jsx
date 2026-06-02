import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigasi.css";

function Navigasi() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

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
      className={`konten-navbar ${scrolled ? "nav-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-brand">
          <span className="nav-brand-icon">⛩️</span>
          <span className="nav-brand-text">Japan Travel</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
          className="nav-toggler"
        >
          <span className="toggler-bar" />
          <span className="toggler-bar" />
          <span className="toggler-bar" />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto nav-menu">
            {links.map((link) => (
              <Nav.Link
                key={link.to}
                as={Link}
                to={link.to}
                className={`nav-item-link ${location.pathname === link.to ? "nav-active" : ""}`}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Link
              to="/contact"
              className="nav-book-btn"
              onClick={() => setExpanded(false)}
            >
              Mulai Perjalanan
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;