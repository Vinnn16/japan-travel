import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import CustomerReview from "../components/CustomerReview";
import "../styles/Home.css";

const destinations = [
  { name: "Tokyo", img: "https://images.pexels.com/photos/30117629/pexels-photo-30117629/free-photo-of-gerbang-kuil-tradisional-jepang-di-minato-tokyo.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Metropolitan", desc: "Kota futuristik yang memadukan tradisi dan modernitas dengan sempurna." },
  { name: "Kyoto", img: "https://images.pexels.com/photos/356629/pexels-photo-356629.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Cultural", desc: "Pusat budaya Jepang dengan ribuan kuil dan taman tradisional yang menakjubkan." },
  { name: "Osaka", img: "https://images.pexels.com/photos/2365159/pexels-photo-2365159.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Culinary", desc: "Surga kuliner Jepang dengan street food legendaris dan kehidupan malam yang hidup." },
  { name: "Hokkaido", img: "https://images.pexels.com/photos/2031689/pexels-photo-2031689.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Nature", desc: "Pulau utara Jepang dengan pemandangan alam yang spektakuler di setiap musim." },
  { name: "Kawaguchiko", img: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Scenic", desc: "Danau indah dengan latar Gunung Fuji yang menjadi ikon Jepang di seluruh dunia." },
  { name: "Shirakawago", img: "https://images.pexels.com/photos/16592317/pexels-photo-16592317/free-photo-of-dingin-salju-kayu-pemandangan.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Heritage", desc: "Desa warisan dunia UNESCO dengan rumah tradisional beratap jerami yang memukau." },
];

const stats = [
  { number: "5000+", label: "Wisatawan Puas" },
  { number: "6", label: "Destinasi Unggulan" },
  { number: "10+", label: "Tahun Pengalaman" },
  { number: "4.9", label: "Rating Rata-rata" },
];

const faqs = [
  { q: "Apakah perlu tip di Jepang?", a: "Tidak, memberi tip di Jepang justru dianggap tidak sopan. Pelayanan yang baik sudah termasuk dalam harga dan merupakan standar profesionalisme di sana." },
  { q: "Bisakah menggunakan kartu kredit di Jepang?", a: "Sebagian besar hotel dan department store menerima kartu kredit. Namun untuk restoran kecil, konbini, dan transportasi lokal, lebih baik sediakan uang tunai Yen Jepang." },
  { q: "Apa dress code yang perlu diperhatikan?", a: "Saat mengunjungi kuil dan shrine, kenakan pakaian yang sopan dan menutup bahu serta lutut. Beberapa tempat menyediakan kain penutup untuk dipinjam." },
  { q: "Apa transportasi terbaik di Jepang?", a: "JR Pass adalah pilihan terbaik untuk perjalanan antar kota. Untuk dalam kota, gunakan subway dan bus yang sangat efisien dan tepat waktu." },
  { q: "Kapan waktu terbaik mengunjungi Jepang?", a: "Musim semi (Maret-Mei) untuk melihat sakura, dan musim gugur (Oktober-November) untuk foliage merah. Hindari Golden Week (akhir April-awal Mei) karena sangat ramai." },
];

function Home() {
  return (
    <div className="home-page">

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">✈️ Discover Japan</span>
          <h1 className="hero-title">
            Jelajahi Keindahan<br />
            <span className="hero-highlight">Negeri Sakura</span>
          </h1>
          <p className="hero-subtitle">
            Dari kuil bersejarah hingga metropolis modern — kami siapkan perjalanan Jepang yang tak terlupakan untuk kamu.
          </p>
          <div className="hero-actions">
            <Link to="/destinations" className="btn-hero-primary">Lihat Destinasi</Link>
            <Link to="/contact" className="btn-hero-secondary">Hubungi Kami</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <Container>
          <Row className="stats-row">
            {stats.map((s, i) => (
              <Col key={i} md={3} sm={6} xs={6} className="stat-col">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="section-destinations">
        <Container>
          <div className="section-header">
            <span className="section-tag">DESTINASI</span>
            <h2 className="section-title">Tempat yang Wajib Dikunjungi</h2>
            <p className="section-sub">Temukan keajaiban Jepang dari kota metropolitan hingga desa tradisional yang memesona.</p>
          </div>
          <Row className="dest-grid">
            {destinations.map((d, i) => (
              <Col key={i} lg={4} md={6} sm={6} xs={12} className="mb-4">
                <div className="dest-card">
                  <div className="dest-img-wrap">
                    <img src={d.img} alt={d.name} className="dest-img" />
                    <span className="dest-tag">{d.tag}</span>
                  </div>
                  <div className="dest-body">
                    <h5 className="dest-name">{d.name}</h5>
                    <p className="dest-desc">{d.desc}</p>
                    <Link to="/destinations" className="dest-link">Selengkapnya →</Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-2">
            <Link to="/destinations" className="btn-view-all">Lihat Semua Destinasi</Link>
          </div>
        </Container>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section-why">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={12} className="mb-4 mb-lg-0">
              <span className="section-tag">MENGAPA KAMI</span>
              <h2 className="section-title mt-2">Pengalaman Wisata Jepang Terbaik</h2>
              <p className="why-desc">Kami mengkhususkan diri dalam tur yang disesuaikan dengan kebutuhan kamu — dari tur kota hingga petualangan alam, semua dirancang untuk memberikan pengalaman terbaik.</p>
              <div className="why-points">
                {[
                  { icon: "🎯", title: "Tur Tersesuaikan", desc: "Setiap perjalanan dirancang khusus sesuai preferensi dan budget kamu." },
                  { icon: "🗣️", title: "Pemandu Berpengalaman", desc: "Tim kami fasih berbahasa Indonesia dan memahami budaya Jepang secara mendalam." },
                  { icon: "💰", title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi — semua sudah termasuk dalam paket kami." },
                ].map((p, i) => (
                  <div key={i} className="why-point">
                    <div className="why-icon">{p.icon}</div>
                    <div>
                      <h6 className="why-title">{p.title}</h6>
                      <p className="why-text">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={7} md={12}>
              <div className="why-img-grid">
                <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Japan 1" className="why-img why-img-1" />
                <img src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Japan 2" className="why-img why-img-2" />
                <img src="https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Japan 3" className="why-img why-img-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-faq">
        <Container>
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="section-sub">Semua yang perlu kamu tahu sebelum berwisata ke Jepang.</p>
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion className="faq-accordion">
                {faqs.map((faq, i) => (
                  <Accordion.Item key={i} eventKey={String(i)} className="faq-item">
                    <Accordion.Header>{faq.q}</Accordion.Header>
                    <Accordion.Body>{faq.a}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== REVIEWS (dari API, tanpa form) ===== */}
      <section className="section-reviews-home">
        <CustomerReview showForm={false} />
        <div className="text-center mt-2 pb-4">
          <Link to="/review" className="btn-view-all">Lihat Semua Review & Tulis Ulasan</Link>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section-cta">
        <Container>
          <div className="cta-box">
            <h2 className="cta-title">Siap Memulai Petualangan?</h2>
            <p className="cta-sub">Konsultasikan perjalanan impian kamu ke Jepang bersama tim kami sekarang.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-cta-primary">Hubungi Kami</Link>
              <Link to="/destinations" className="btn-cta-secondary">Lihat Destinasi</Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default Home;