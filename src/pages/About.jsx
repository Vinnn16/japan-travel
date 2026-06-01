import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

const team = [
  { name: "Hiroshi Tanaka", role: "Founder & CEO", initials: "HT", color: "#185FA5", bg: "#E6F1FB", desc: "15 tahun pengalaman di industri pariwisata Jepang." },
  { name: "Siti Rahmawati", role: "Head of Operations", initials: "SR", color: "#0F6E56", bg: "#E1F5EE", desc: "Spesialis logistik perjalanan dan hubungan vendor." },
  { name: "Kenji Yamamoto", role: "Lead Tour Guide", initials: "KY", color: "#854F0B", bg: "#FAEEDA", desc: "Pemandu berlisensi dengan pengetahuan budaya mendalam." },
  { name: "Dewi Kusuma", role: "Customer Relations", initials: "DK", color: "#533AB7", bg: "#EEEDFE", desc: "Memastikan setiap pelanggan mendapat pengalaman terbaik." },
];

const values = [
  { icon: "🎯", title: "Kustomisasi", desc: "Setiap perjalanan dirancang unik sesuai kebutuhan dan impian kamu." },
  { icon: "🤝", title: "Kepercayaan", desc: "Transparansi penuh dalam setiap aspek layanan kami." },
  { icon: "🌏", title: "Pengalaman", desc: "10+ tahun menghadirkan perjalanan tak terlupakan ke Jepang." },
  { icon: "💚", title: "Sustainable", desc: "Kami berkomitmen pada pariwisata yang bertanggung jawab." },
];

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="about-badge">🗾 Tentang Kami</span>
          <h1>Passionate About Japan</h1>
          <p>Kami bukan sekadar agen perjalanan — kami adalah pecinta Jepang yang ingin berbagi keajaiban negeri ini dengan dunia.</p>
        </div>
      </div>

      {/* Story */}
      <section className="about-story">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <span className="section-tag-about">CERITA KAMI</span>
              <h2 className="about-title">Berawal dari Kecintaan<br />terhadap Jepang</h2>
              <p className="about-text">Japan Travel didirikan pada tahun 2014 oleh sekelompok pecinta budaya Jepang yang ingin berbagi keindahan negeri sakura kepada wisatawan Indonesia.</p>
              <p className="about-text">Berawal dari tur kecil-kecilan untuk teman dan keluarga, kini kami telah membantu lebih dari 5.000 wisatawan merasakan pengalaman tak terlupakan di Jepang.</p>
              <p className="about-text">Kami percaya bahwa perjalanan terbaik adalah yang dirancang dengan penuh hati — memahami keunikan setiap traveler dan menghubungkan mereka dengan jiwa Jepang yang sesungguhnya.</p>
              <Link to="/contact" className="btn-about-cta">Rencanakan Perjalananmu</Link>
            </Col>
            <Col lg={6}>
              <div className="about-img-wrap">
                <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=800" alt="About Japan Travel" className="about-img" />
                <div className="about-img-badge">
                  <span className="aib-number">10+</span>
                  <span className="aib-text">Tahun Pengalaman</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="about-values">
        <Container>
          <div className="text-center mb-5">
            <span className="section-tag-about">NILAI KAMI</span>
            <h2 className="about-title">Yang Membuat Kami Berbeda</h2>
          </div>
          <Row>
            {values.map((v, i) => (
              <Col key={i} md={3} sm={6} xs={12} className="mb-4">
                <div className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h5 className="value-title">{v.title}</h5>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section className="about-team">
        <Container>
          <div className="text-center mb-5">
            <span className="section-tag-about">TIM KAMI</span>
            <h2 className="about-title">Orang-orang di Balik Japan Travel</h2>
          </div>
          <Row className="justify-content-center">
            {team.map((t, i) => (
              <Col key={i} lg={3} md={6} sm={6} xs={12} className="mb-4">
                <div className="team-card">
                  <div className="team-avatar" style={{ background: t.bg, color: t.color }}>{t.initials}</div>
                  <h5 className="team-name">{t.name}</h5>
                  <p className="team-role">{t.role}</p>
                  <p className="team-desc">{t.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default About;
