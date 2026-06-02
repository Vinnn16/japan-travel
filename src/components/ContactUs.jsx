import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/ContactUs.css";

const API_URL = "https://japan-travel-api.azurewebsites.net";

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
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Gagal mengirim pesan.");

      setSubmitted(true);
      setFormData({
        firstName: "", lastName: "", email: "",
        phone: "", topic: "", message: "",
      });
    } catch (err) {
      setError(err.message || "Terjadi kesalahan. Coba lagi.");
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
                Hubungi kami dan kami akan merespons dalam 1–2 hari kerja.
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
                    <strong>Jam Operasional</strong>
                    <span>Senin–Jumat, 09.00–17.00 WIB</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Form */}
          <Col lg={7} md={12}>
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">✅</div>
                  <h4>Pesan Terkirim!</h4>
                  <p>Terima kasih telah menghubungi kami. Tim kami akan membalas dalam 1–2 hari kerja.</p>
                  <button className="btn-back" onClick={() => setSubmitted(false)}>
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="error-msg">⚠️ {error}</div>
                  )}
                  <Row>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Nama depan</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Budi" required />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Nama belakang</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Santoso" required />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="budi@email.com" required />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cf-group">
                        <label>Nomor telepon (opsional)</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+62 812 3456 7890" />
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
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tulis pertanyaan atau pesanmu di sini..." rows={5} required />
                      </div>
                    </Col>
                  </Row>
                  <button type="submit" className="btn-send" disabled={loading}>
                    {loading ? "Mengirim..." : "Kirim Pesan →"}
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