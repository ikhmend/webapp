function InfoSection({ restaurant }) {
  return (
    <section id="info-section" className="info-section">
      <div className="info-container">
        <div className="info-card">
          <h2>About</h2>
          <p className="info-about">{restaurant.info.about}</p>
          <div className="info-item">
            <div>
              <h3>Address</h3>
              <p>{restaurant.info.address}</p>
            </div>
          </div>
          <div className="info-item">
            <div>
              <h3>Phone</h3>
              <p>{restaurant.info.phone}</p>
            </div>
          </div>
          <div className="info-item">
            <div>
              <h3>Hours</h3>
              <p>{restaurant.info.hours}</p>
            </div>
          </div>
          <div className="info-tags">
            <h3>Tags</h3>
            <div className="tag-list">
              {restaurant.info.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;