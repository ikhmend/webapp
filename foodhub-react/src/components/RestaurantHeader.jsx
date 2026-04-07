function RestaurantHeader({ restaurant }) {
  return (
    <>
      <div className="details-hero">
        <img src={restaurant.heroImage} alt={restaurant.name} />
        <div className="hero-overlay"></div>
      </div>
      <div className="details-content">
        <div className="details-container">
          <h1>{restaurant.name}</h1>
          <div className="meta-row">
            <span className="rating">
              <strong>{restaurant.rating}</strong>
              <span>({restaurant.reviewCount} reviews)</span>
            </span>
            <span className="dot">•</span>
            <span>{restaurant.cuisine.join(", ")}</span>
            <span className="dot">•</span>
            <span>{restaurant.priceLevel}</span>
          </div>
          <div className="meta-row secondary">
            <span>{restaurant.deliveryTime}</span>
            <span>{restaurant.distance}</span>
            <span>Delivery: {restaurant.deliveryFee}</span>
          </div>
          <div className="offer-badge">{restaurant.offer}</div>
        </div>
      </div>
    </>
  );
}
export default RestaurantHeader;