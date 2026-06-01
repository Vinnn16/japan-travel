import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/ContactUs.css";
import { supabase } from "../supbase";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            topic: formData.topic,
            message: formData.message,
          },
        ]);

      if (error) {
        console.error(error);
        alert("Gagal mengirim pesan.");
        return;
      }

      console.log("Data tersimpan:", data);

      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section">
      <Container>
        <Row>
          {/* Info Kontak */}
          <Col lg={5} md={12} className="mb-4 mb-lg-0">
            <div className="contact-info">
              <p className="contact-label">HUBUNGI KAMI</p>
              <h2 className="contact-title">Ada yang ingin kamu tanyakan?</h2>
              <p className="contact-desc">
                Tim kami siap membantu kamu merencanakan perjalanan impian ke Jepang.
                Hubungi kami melalui form atau kontak di bawah.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <strong>Email</strong>
                    <span>info@japantravel.com</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <strong>Telepon</strong>
                    <span>+62 21 1234 5678</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <strong>Alamat</strong>
                    <span>Jl. Gatot Subroto No. 1, Jakarta Selatan</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <strong>Jam operasional</strong>
                    <span>Senin–Jumat, 09.00–17.00 WIB</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-btn" aria-label="Instagram">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="Facebook">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="Twitter">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </Col>

          {/* Form */}
          <Col lg={7} md={12}>
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">✅</div>
                  <h4>Pesan terkirim!</h4>
                  <p>Terima kasih telah menghubungi kami. Tim kami akan membalas dalam 1–2 hari kerja.</p>
                  <button className="btn-back" onClick={() => setSubmitted(false)}>
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Nama depan</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Budi"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Nama belakang</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Santoso"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="budi@email.com"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Nomor telepon (opsional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="cf-group">
                        <label>Topik pertanyaan</label>
                        <select name="topic" value={formData.topic} onChange={handleChange} required>
                          <option value="">Pilih topik</option>
                          <option>Paket wisata</option>
                          <option>Informasi destinasi</option>
                          <option>Pemesanan tiket</option>
                          <option>Akomodasi</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="cf-group">
                        <label>Pesan</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tulis pertanyaan atau pesanmu di sini..."
                          rows={5}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <button type="submit" className="btn-send" disabled={loading}>
                    {loading ? "Mengirim..." : "Kirim pesan →"}
                  </button>
                </form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
