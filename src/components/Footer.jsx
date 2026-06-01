import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-top">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <span className="footer-logo">🗾</span>
              <span className="footer-name">Japan Travel</span>
            </div>
            <p className="footer-desc">
              Kami membantu kamu merencanakan perjalanan impian ke Jepang dengan pengalaman terbaik, dari budaya tradisional hingga modernitas kota.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4">
            <h6 className="footer-heading">Navigasi</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/review">Reviews</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={6} sm={6} className="mb-4">
            <h6 className="footer-heading">Destinasi Populer</h6>
            <ul className="footer-links">
              <li><a href="#">Tokyo</a></li>
              <li><a href="#">Kyoto</a></li>
              <li><a href="#">Osaka</a></li>
              <li><a href="#">Hokkaido</a></li>
              <li><a href="#">Shirakawago</a></li>
              <li><a href="#">Kawaguchiko</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="footer-heading">Kontak</h6>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                info@japantravel.com
              </li>
              <li>
                <span className="contact-icon">📞</span>
                +62 21 1234 5678
              </li>
              <li>
                <span className="contact-icon">📍</span>
                Jl. Gatot Subroto No. 1, Jakarta
              </li>
              <li>
                <span className="contact-icon">🕐</span>
                Senin–Jumat, 09.00–17.00 WIB
              </li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>© 2026 Japan Travel. All rights reserved.</p>
          <p>Made with ❤️ for Japan lovers</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
