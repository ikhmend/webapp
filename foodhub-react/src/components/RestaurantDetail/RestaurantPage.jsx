import Navbar from "../Navbar";
import RestaurantHeader from "./RestaurantHeader";
import MenuSection from "./MenuSection";
import Footer from "../Footer";
import ReviewSection from "./ReviewSection";
import InfoSection from "./InfoSection";
import { useEffect, useState } from "react";
import { getMenuItemsByRestaurantId } from "../../api/memuApi";
function RestaurantPage({ restaurant, addToCart, cartCount }) {
  const [menuItems, setMenuItems] = useState([]);
  const [loadingMenu, setLoadingMenu] = useState(true);
  const [activeTab, setActiveTab] = useState("menu");
  useEffect(() => {
  async function fetchMenuItems() {
    try {
      setLoadingMenu(true);
      const data = await getMenuItemsByRestaurantId(restaurant.id);
      setMenuItems(data);
    } catch (error) {
      console.error(error);
      alert("Менюний мэдээлэл авахад алдаа гарсан.");
    } finally {
      setLoadingMenu(false);
    }
  }
  if (restaurant?.id) {
    fetchMenuItems();
  }
}, [restaurant]);
function groupMenuItemsByCategory(items) {
  const buleglesen = {};
  items.forEach((item) => {
    if (!buleglesen[item.category]) {
      buleglesen[item.category] = {
        category: item.category,
        items: [],
      };
    }
    buleglesen[item.category].items.push(item);
  });
  return Object.values(buleglesen);
}
const groupedMenu = groupMenuItemsByCategory(menuItems);
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
          {loadingMenu ? (
            <p className="light-text">Меню ачааллаж байна...</p>
          ) : (
            groupedMenu.map((section) => (
              <MenuSection
                key={section.category}
                section={section}
                addToCart={addToCart}
              />
            ))
          )}
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