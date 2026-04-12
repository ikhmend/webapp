import { useState, useEffect } from "react";
import restaurantData from "./data/restaurantData.json";
import "./App.css";
import RestaurantPage from "./components/RestaurantDetail/RestaurantPage";
import CartPage from "./pages/CartPage";
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
function qtyUp(itemId) { //item bureer ywaad id-tai taarsan uyd quantity-g negeer nemegduulne, tegeed setCart function duudagdsan
  const updatedCart = cart.map((cartItem) =>
    cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity+ 1 }: cartItem
  );
  setCart(updatedCart);
}
function qtyDown(itemId) {
  const updatedCart = cart.map((cartItem) =>
    cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity- 1 }: cartItem
  )
  .filter((cartItem)=>cartItem.quantity>0);
  setCart(updatedCart);
}
function removeItem(itemId) { //cart dotor baigaa item bureer ywaad taaraagui item bur updatedCart-d uldene ter uldsendee setCart ashiglana
  const updatedCart = cart.filter(
    (cartItem) => cartItem.id !== itemId
  );
  setCart(updatedCart);
}
  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <CartPage cart={cart} cartCount={cartCount} qtyUp={qtyUp} qtyDown={qtyDown} removeItem={removeItem}
    />
  );
}
export default App;
