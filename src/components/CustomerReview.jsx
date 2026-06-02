import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/CustomerReview.css";

const API_URL = "https://japan-travel-api.azurewebsites.net";

// Review statis sebagai fallback
const staticReviews = [
  { id: 1, name: "Andi Saputra", origin: "Jakarta, Indonesia", rating: 5, destination: "Tokyo", comment: "Perjalanan ke Tokyo benar-benar luar biasa! Panduan wisatanya sangat membantu.", initials: "AS", color: "#185FA5", bgColor: "#E6F1FB" },
  { id: 2, name: "Sari Rahayu", origin: "Surabaya, Indonesia", rating: 5, destination: "Kyoto", comment: "Kyoto di musim gugur sungguh indah. Rekomendasinya sangat tepat!", initials: "SR", color: "#0F6E56", bgColor: "#E1F5EE" },
  { id: 3, name: "Dian Pratama", origin: "Bandung, Indonesia", rating: 4, destination: "Osaka", comment: "Pengalaman seru di Osaka, terutama street food-nya. Sangat worth it!", initials: "DP", color: "#854F0B", bgColor: "#FAEEDA" },
  { id: 4, name: "Rina Kusuma", origin: "Medan, Indonesia", rating: 5, destination: "Hokkaido", comment: "Hokkaido di musim salju adalah impian yang jadi kenyataan!", initials: "RK", color: "#533AB7", bgColor: "#EEEDFE" },
  { id: 5, name: "Budi Santoso", origin: "Yogyakarta, Indonesia", rating: 5, destination: "Shirakawago", comment: "Desa Shirakawago seperti di dalam dongeng. Highly recommended!", initials: "BS", color: "#993556", bgColor: "#FBEAF0" },
  { id: 6, name: "Maya Lestari", origin: "Makassar, Indonesia", rating: 5, destination: "Kawaguchiko", comment: "Melihat Gunung Fuji dari Kawaguchiko adalah momen tak terlupakan.", initials: "ML", color: "#3B6D11", bgColor: "#EAF3DE" },
];

function getInitials(name) {
  return name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

const avatarColors = [
  { color: "#185FA5", bg: "#E6F1FB" }, { color: "#0F6E56", bg: "#E1F5EE" },
  { color: "#854F0B", bg: "#FAEEDA" }, { color: "#533AB7", bg: "#EEEDFE" },
  { color: "#993556", bg: "#FBEAF0" }, { color: "#3B6D11", bg: "#EAF3DE" },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(s => (
        <span key={s} className={s <= rating ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
}

function CustomerReview({ showForm = false }) {
  const [reviews, setReviews] = useState(staticReviews);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [formData, setFormData] = useState({ name: "", origin: "", destination: "", rating: 5, comment: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Ambil review dari API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_URL}/api/reviews`);
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) setReviews(data);
        }
      } catch {
        // Gunakan static reviews jika API tidak bisa diakses
      } finally {
        setLoadingReviews(false);
      }
    };
    fetchReviews();
  }, [submitted]);

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  const ratingCounts = [5, 4, 3, 2, 1].map(star => ({
    star,
    pct: Math.round((reviews.filter(r => r.rating === star).length / reviews.length) * 100) || 0,
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, rating: parseInt(formData.rating) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengirim review.");
      setSubmitted(true);
      setFormData({ name: "", origin: "", destination: "", rating: 5, comment: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err.message || "Terjadi kesalahan. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="review-section">
      <Container>
        {/* Header */}
        <div className="review-header">
          <div>
            <p className="review-label">TESTIMONI</p>
            <h2 className="review-title">Apa Kata Mereka?</h2>
            <p className="review-subtitle">
              Ulasan dari pelanggan yang sudah merasakan perjalanan bersama kami.
            </p>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="rating-summary">
          <div className="big-score">
            <span className="score-number">{avgRating}</span>
            <StarRating rating={Math.round(parseFloat(avgRating))} />
            <span className="score-total">dari {reviews.length} ulasan</span>
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

        {/* Form Tulis Review — hanya tampil di halaman /review */}
        {showForm && (
          <div className="review-form-wrapper">
            <h5 className="form-title">✍️ Bagikan Pengalamanmu</h5>
            {submitted && (
              <div className="success-msg">✅ Terima kasih! Ulasan kamu telah dikirim.</div>
            )}
            {error && (
              <div className="error-msg">⚠️ {error}</div>
            )}
            <form onSubmit={handleSubmit} className="review-form">
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label>Nama lengkap</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nama kamu" required />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Asal kota</label>
                    <input type="text" name="origin" value={formData.origin} onChange={handleChange} placeholder="Kota, Negara" required />
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
                      <option>Nara</option>
                      <option>Hiroshima</option>
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
                    <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Bagikan pengalaman wisata kamu..." rows={4} required />
                  </div>
                </Col>
              </Row>
              <button type="submit" className="btn-submit-review" disabled={submitting}>
                {submitting ? "Mengirim..." : "Kirim Ulasan"}
              </button>
            </form>
          </div>
        )}

        {/* Review Cards */}
        <Row className="review-cards-row">
          {loadingReviews ? (
            <Col className="text-center py-4">
              <p style={{ color: "#6b7280" }}>Memuat ulasan...</p>
            </Col>
          ) : (
            reviews.map((review, i) => {
              const colorSet = avatarColors[i % avatarColors.length];
              const initials = review.initials || getInitials(review.name);
              const bgColor = review.bgColor || colorSet.bg;
              const color = review.color || colorSet.color;
              return (
                <Col key={review.id || i} md={4} sm={6} xs={12} className="mb-4">
                  <div className="review-card">
                    <StarRating rating={review.rating} />
                    <p className="review-comment">"{review.comment}"</p>
                    <div className="reviewer-info">
                      <div className="avatar-initials" style={{ background: bgColor, color }}>
                        {initials}
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
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
}

export default CustomerReview;