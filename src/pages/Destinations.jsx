import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Destinations.css";

const destinations = [
  {
    name: "Tokyo", tag: "Metropolitan", duration: "3-5 hari", best: "Maret–Mei",
    img: "https://images.pexels.com/photos/30117629/pexels-photo-30117629/free-photo-of-gerbang-kuil-tradisional-jepang-di-minato-tokyo.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Tokyo, ibu kota Jepang, adalah kota yang memadukan budaya tradisional dan modern dengan sempurna. Dari gedung pencakar langit yang diterangi neon hingga kuil-kuil kuno yang tenang.",
    highlights: ["Shibuya Crossing", "Asakusa & Senso-ji", "Harajuku", "Tokyo Tower", "Akihabara"],
    budget: "Rp 15-25 juta",
  },
  {
    name: "Kyoto", tag: "Cultural", duration: "3-4 hari", best: "Oktober–November",
    img: "https://images.pexels.com/photos/356629/pexels-photo-356629.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Kyoto adalah pusat budaya Jepang dengan lebih dari 1600 kuil Buddha dan 400 shrine Shinto. Kota ini menawarkan pengalaman Jepang yang paling autentik.",
    highlights: ["Fushimi Inari", "Arashiyama Bamboo", "Kinkaku-ji", "Gion District", "Nishiki Market"],
    budget: "Rp 12-20 juta",
  },
  {
    name: "Osaka", tag: "Culinary", duration: "2-3 hari", best: "April, Oktober",
    img: "https://images.pexels.com/photos/2365159/pexels-photo-2365159.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Osaka dikenal sebagai surga kuliner Jepang. Kota ini terkenal dengan takoyaki, okonomiyaki, dan kehidupan malam yang paling meriah di seluruh Jepang.",
    highlights: ["Dotonbori", "Osaka Castle", "Kuromon Market", "Universal Studios Japan", "Shinsekai"],
    budget: "Rp 10-18 juta",
  },
  {
    name: "Hokkaido", tag: "Nature", duration: "4-6 hari", best: "Desember–Februari",
    img: "https://images.pexels.com/photos/2031689/pexels-photo-2031689.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Hokkaido adalah pulau paling utara Jepang dengan keindahan alam yang spektakuler. Terkenal dengan festival salju Sapporo dan ladang bunga lavender di Furano.",
    highlights: ["Sapporo Snow Festival", "Furano Lavender", "Noboribetsu Onsen", "Otaru Canal", "Shiretoko"],
    budget: "Rp 18-30 juta",
  },
  {
    name: "Kawaguchiko", tag: "Scenic", duration: "1-2 hari", best: "April, Oktober–November",
    img: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Kawaguchiko adalah salah satu dari Lima Danau Fuji yang menawarkan pemandangan Gunung Fuji paling ikonik. Tempat terbaik untuk fotografi.",
    highlights: ["Danau Kawaguchi", "Chureito Pagoda", "Mount Fuji View", "Ropeway", "Kawaguchiko Music Forest"],
    budget: "Rp 8-15 juta",
  },
  {
    name: "Shirakawago", tag: "Heritage", duration: "1-2 hari", best: "Desember–Februari",
    img: "https://images.pexels.com/photos/16592317/pexels-photo-16592317/free-photo-of-dingin-salju-kayu-pemandangan.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Shirakawago adalah desa warisan dunia UNESCO di Prefektur Gifu. Terkenal dengan rumah tradisional gassho-zukuri yang beratap jerami berbentuk segitiga.",
    highlights: ["Gassho-Zukuri Houses", "Shiroyama Viewpoint", "Wada House Museum", "Night Illumination", "Local Sake Tasting"],
    budget: "Rp 10-18 juta",
  },
];

function Destinations() {
  const [active, setActive] = useState(null);

  return (
    <div className="destinations-page">
      <div className="dest-hero">
        <div className="dest-hero-overlay" />
        <div className="dest-hero-content">
          <span className="dest-badge">🗺️ Explore Japan</span>
          <h1>Destinasi Wisata Jepang</h1>
          <p>Dari metropolis modern hingga desa tradisional — temukan destinasi impian kamu.</p>
        </div>
      </div>

      <section className="dest-main">
        <Container>
          {destinations.map((d, i) => (
            <div key={i} className={`dest-row ${i % 2 === 1 ? "reverse" : ""}`}>
              <div className="dest-row-img">
                <img src={d.img} alt={d.name} />
                <div className="dest-row-tag">{d.tag}</div>
              </div>
              <div className="dest-row-info">
                <h2 className="dri-name">{d.name}</h2>
                <p className="dri-desc">{d.desc}</p>
                <div className="dri-meta">
                  <span>⏱ {d.duration}</span>
                  <span>📅 Best: {d.best}</span>
                  <span>💰 {d.budget}</span>
                </div>
                <div className="dri-highlights">
                  <p className="dri-hl-title">Highlight:</p>
                  <div className="dri-hl-tags">
                    {d.highlights.map((h, j) => (
                      <span key={j} className="hl-tag">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}

export default Destinations;
