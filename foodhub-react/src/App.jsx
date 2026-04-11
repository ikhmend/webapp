import { useState, useEffect } from "react";
import restaurantData from "./data/restaurantData.json";
import "./App.css";
import RestaurantPage from "./components/RestaurantPage";
function App() {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
  function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }
  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <RestaurantPage
      restaurant={restaurantData}
      addToCart={addToCart}
      cartCount={cartCount}
    />
  );
}
export default App;
