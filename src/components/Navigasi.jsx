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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Di home: transparan jika belum scroll, solid jika sudah scroll
  // Di halaman lain: selalu solid
  const isTransparent = isHome && !scrolled;

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
      className={`konten-navbar ${isTransparent ? "nav-transparent" : "nav-solid"}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="nav-brand">
          <div className="nav-brand-icon">🗾</div>
          <span className="nav-brand-text">Japan Travel</span>
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
          className="nav-toggler"
        >
          <span className="toggler-bar" />
          <span className="toggler-bar" />
          <span className="toggler-bar" />
        </Navbar.Toggle>

        {/* Links */}
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
                {location.pathname === link.to && <span className="nav-dot" />}
              </Nav.Link>
            ))}
            <Link
              to="/contact"
              className="nav-book-btn"
              onClick={() => setExpanded(false)}
            >
              Book Now
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
