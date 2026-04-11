function ReviewsSection({ restaurant }) {
  const dist = restaurant.reviewsSummary.distribution;
  function getStars(rating) {
    const full = "★".repeat(Math.floor(rating));
    const empty = "☆".repeat(5 - Math.floor(rating));
    return full + empty;
  }
  return (
    <section id="reviews-section" className="reviews-section">
      <div className="reviews-container">
        <div className="review-summary-card">
          <div className="summary-left">
            <h2>{restaurant.reviewsSummary.average}</h2>
            <div className="summary-stars">
              {getStars(restaurant.reviewsSummary.average)}
            </div>
            <p>{restaurant.reviewsSummary.total} reviews</p>
          </div>
          <div className="summary-right">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="rating-row">
                <span>{star}★</span>
                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${dist[star]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {restaurant.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <img src={review.avatar} alt={review.name} />
              <div className="review-meta">
                <h3>{review.name}</h3>
                <div className="review-rating-date">
                  <span className="stars">{getStars(review.rating)}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;