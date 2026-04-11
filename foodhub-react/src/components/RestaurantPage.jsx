import { useState } from "react";
import Navbar from "./Navbar";
import RestaurantHeader from "./RestaurantHeader";
import MenuSection from "./MenuSection";
import Footer from "./Footer";
import ReviewSection from "./ReviewSection";
import InfoSection from "./InfoSection";
function RestaurantPage({ restaurant, addToCart, cartCount }) {
  const [activeTab, setActiveTab] = useState("menu");
  return (
    <div className="restaurant-detail-page">
      <Navbar cartCount={cartCount} />
      <RestaurantHeader restaurant={restaurant} />
      <section className="tabs-section">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "menu" ? "active" : ""}`}
            onClick={() => setActiveTab("menu")}
          >
            Menu
          </button>
          <button
            className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (3)
          </button>
          <button
            className={`tab-btn ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Info
          </button>
        </div>
      </section>
      {activeTab === "menu" && (
        <section id="menu-section">
          {restaurant.menu.map((section) => (
            <MenuSection
              key={section.category}
              section={section}
              addToCart={addToCart}
            />
          ))}
        </section>
      )}
      {activeTab === "reviews" && (
        <ReviewSection restaurant={restaurant} />
      )}
      {activeTab === "info" && (
        <InfoSection restaurant={restaurant}/>
      )}
      <Footer />
    </div>
  );
}
export default RestaurantPage;