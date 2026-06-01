import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/CustomerReview.css";

const reviewsData = [
  {
    id: 1,
    name: "Andi Saputra",
    origin: "Jakarta, Indonesia",
    rating: 5,
    destination: "Tokyo",
    comment:
      "Perjalanan ke Tokyo benar-benar luar biasa! Panduan wisatanya sangat membantu dan semua rekomendasi tempat makan terbukti enak semua.",
    initials: "AS",
    color: "#185FA5",
    bgColor: "#E6F1FB",
  },
  {
    id: 2,
    name: "Sari Rahayu",
    origin: "Surabaya, Indonesia",
    rating: 5,
    destination: "Kyoto",
    comment:
      "Kyoto di musim gugur sungguh indah. Rekomendasinya sangat tepat, tidak kecewa sama sekali! Pasti akan kembali lagi.",
    initials: "SR",
    color: "#0F6E56",
    bgColor: "#E1F5EE",
  },
  {
    id: 3,
    name: "Dian Pratama",
    origin: "Bandung, Indonesia",
    rating: 4,
    destination: "Osaka",
    comment:
      "Pengalaman seru di Osaka, terutama street food-nya. Paket yang ditawarkan sangat worth it dan pelayanannya ramah.",
    initials: "DP",
    color: "#854F0B",
    bgColor: "#FAEEDA",
  },
  {
    id: 4,
    name: "Rina Kusuma",
    origin: "Medan, Indonesia",
    rating: 5,
    destination: "Hokkaido",
    comment:
      "Hokkaido di musim salju adalah impian! Terima kasih sudah membantu merencanakan perjalanan yang sempurna ini.",
    initials: "RK",
    color: "#533AB7",
    bgColor: "#EEEDFE",
  },
  {
    id: 5,
    name: "Budi Santoso",
    origin: "Yogyakarta, Indonesia",
    rating: 5,
    destination: "Shirakawago",
    comment:
      "Desa Shirakawago seperti di dalam dongeng! Tidak menyangka bisa mengunjungi tempat seindah ini. Highly recommended!",
    initials: "BS",
    color: "#993556",
    bgColor: "#FBEAF0",
  },
  {
    id: 6,
    name: "Maya Lestari",
    origin: "Makassar, Indonesia",
    rating: 5,
    destination: "Kawaguchiko",
    comment:
      "Melihat Gunung Fuji dari Kawaguchiko adalah momen yang tidak akan pernah terlupakan. Terima kasih Japan Travel!",
    initials: "ML",
    color: "#3B6D11",
    bgColor: "#EAF3DE",
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

function CustomerReview() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    destination: "",
    rating: 5,
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalReviews = reviewsData.length;
  const avgRating = (
    reviewsData.reduce((sum, r) => sum + r.rating, 0) / totalReviews
  ).toFixed(1);

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviewsData.filter((r) => r.rating === star).length,
    pct: Math.round(
      (reviewsData.filter((r) => r.rating === star).length / totalReviews) * 100
    ),
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nantinya akan dikirim ke backend API
    console.log("Review submitted:", formData);
    setSubmitted(true);
    setShowForm(false);
    setFormData({ name: "", origin: "", destination: "", rating: 5, comment: "" });
  };

  return (
    <div className="review-section">
      <Container>
        <div className="review-header">
          <div>
            <p className="review-label">TESTIMONI</p>
            <h2 className="review-title">Apa kata mereka?</h2>
            <p className="review-subtitle">
              Ulasan dari pelanggan yang sudah merasakan pengalaman wisata bersama kami.
            </p>
          </div>
          <button className="btn-write-review" onClick={() => setShowForm(!showForm)}>
            {showForm ? "✕ Tutup" : "+ Tulis ulasan"}
          </button>
        </div>

        {/* Rating Summary */}
        <div className="rating-summary">
          <div className="big-score">
            <span className="score-number">{avgRating}</span>
            <StarRating rating={Math.round(parseFloat(avgRating))} />
            <span className="score-total">dari {totalReviews} ulasan</span>
          </div>
          <div className="rating-bars">
            {ratingCounts.map(({ star, pct }) => (
              <div key={star} className="bar-row">
                <span className="bar-label">{star}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="bar-pct">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Tulis Review */}
        {showForm && (
          <div className="review-form-wrapper">
            <h5 className="form-title">Bagikan pengalaman kamu</h5>
            {submitted && (
              <div className="success-msg">
                ✅ Terima kasih! Ulasan kamu telah dikirim.
              </div>
            )}
            <form onSubmit={handleSubmit} className="review-form">
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label>Nama lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama kamu"
                      required
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Asal kota</label>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      placeholder="Kota, Negara"
                      required
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Destinasi yang dikunjungi</label>
                    <select name="destination" value={formData.destination} onChange={handleChange} required>
                      <option value="">Pilih destinasi</option>
                      <option>Tokyo</option>
                      <option>Kyoto</option>
                      <option>Osaka</option>
                      <option>Hokkaido</option>
                      <option>Shirakawago</option>
                      <option>Kawaguchiko</option>
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Rating</label>
                    <select name="rating" value={formData.rating} onChange={handleChange}>
                      <option value={5}>★★★★★ (5)</option>
                      <option value={4}>★★★★☆ (4)</option>
                      <option value={3}>★★★☆☆ (3)</option>
                      <option value={2}>★★☆☆☆ (2)</option>
                      <option value={1}>★☆☆☆☆ (1)</option>
                    </select>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label>Ceritakan pengalamanmu</label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder="Bagikan pengalaman wisata kamu..."
                      rows={4}
                      required
                    />
                  </div>
                </Col>
              </Row>
              <button type="submit" className="btn-submit-review">
                Kirim ulasan
              </button>
            </form>
          </div>
        )}

        {/* Review Cards */}
        <Row className="review-cards-row">
          {reviewsData.map((review) => (
            <Col key={review.id} md={4} sm={6} xs={12} className="mb-4">
              <div className="review-card">
                <StarRating rating={review.rating} />
                <p className="review-comment">"{review.comment}"</p>
                <div className="reviewer-info">
                  <div
                    className="avatar-initials"
                    style={{ background: review.bgColor, color: review.color }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="reviewer-name">{review.name}</p>
                    <p className="reviewer-origin">
                      {review.origin} · {review.destination}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CustomerReview;
