import RestaurantHeader from "./RestaurantHeader";
import MenuSection from "./MenuSection";
function RestaurantPage({ restaurant }) {
  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      <section className="tabs-section">
        <div className="tabs">
          <button className="tab-btn active">Menu</button>
          <button className="tab-btn">Reviews (3)</button>
          <button className="tab-btn">Info</button>
        </div>
      </section>
      <section id="menu-section">
        {restaurant.menu.map((section) => (
          <MenuSection key={section.category} section={section} />
        ))}
      </section>
    </div>
  );
}
export default RestaurantPage;