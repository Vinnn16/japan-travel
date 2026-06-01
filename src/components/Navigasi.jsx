import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigasi.css";

function Navigasi() {
  const location = useLocation();

  // Navbar transparan hanya di home, gelap di halaman lain
  const isHome = location.pathname === "";
  const navbarClass = isHome ? "navbar-home" : "navbar-solid";

  return (
    <Navbar expand="lg" className={`konten-navbar ${navbarClass}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="logo-navbar"
            src="https://as1.ftcdn.net/v2/jpg/03/75/05/14/1000_F_375051496_8bBDhtCfF5Xi6L76GmENpEcK7bbWnc2l.jpg"
            alt="Japan Travel Logo"
          />
          Japan Travel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/review"
              className={location.pathname === "/review" ? "active" : ""}
            >
              Customer Review
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
