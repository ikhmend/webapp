import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {getRestaurantById} from "./api/restaurantApi";
import "./App.css";
import RestaurantPage from "./components/RestaurantDetail/RestaurantPage";
import CartPage from "./pages/CartPage";
import OrderConfirmation from "./pages/OrderConfirmation";
function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [restaurant, setRestaurant] = useState(null);
  const [loadingRestaurant, setLoadingRestaurant] = useState(true);
  function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }
  function qtyUp(itemId) {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
  }
  function qtyDown(itemId) {
    const updatedCart = cart
      .map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);

    setCart(updatedCart);
  }
  function removeItem(itemId) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  }
  function clearCart() {
  setCart([]);
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
  async function fetchRestaurant() {
    try {
      setLoadingRestaurant(true);
      const data = await getRestaurantById(1);
      setRestaurant(data);
    } catch (error) {
      console.error(error);
      alert("Рестораны мэдээлэл авахад алдаа гарлаа.");
    } finally {
      setLoadingRestaurant(false);
    }
  }

  fetchRestaurant();
}, []);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (loadingRestaurant) {
  return <h1>Рестораны мэдээлэл ачааллаж байна...</h1>;
  }
  if (!restaurant) {
    return <h1>Рестораны мэдээлэл олдсонгүй.</h1>;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RestaurantPage
            restaurant={restaurant}
            addToCart={addToCart}
            cartCount={cartCount}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CartPage
            restaurant={restaurant}
            cart={cart}
            cartCount={cartCount}
            qtyUp={qtyUp}
            qtyDown={qtyDown}
            removeItem={removeItem}
            clearCart={clearCart}
          />
        }
      />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
    </Routes>
  );
}
export default App;