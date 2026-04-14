import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItemSection from "../components/Cart/CartItemSection";
import OrderSummary from "../components/Cart/OrderSummary";
import PaymentMethod from "../components/Cart/PaymentMethod";
import DeliveryForm from "../components/Cart/DeliveryForm";

function CartPage({ cart, cartCount, qtyUp, qtyDown, removeItem, restaurant }) {
  function parsePrice(price) {
    return Number(String(price).replace(/[^\d]/g, ""));
  }

  function subtotal(cart) {
    return cart.reduce((sum, item) => {
      const numberPrice = parsePrice(item.price);
      return sum + numberPrice * item.quantity;
    }, 0);
  }

  function hurgeltUne(restaurant) {
    return parsePrice(restaurant.deliveryFee);
  }

  function shimtgel(cart) {
    return Math.round(subtotal(cart) * 0.1);
  }

  const undsenUne = subtotal(cart);
  const hurgelt = hurgeltUne(restaurant);
  const tax = shimtgel(cart);
  const total = undsenUne + hurgelt + tax;

  return (
    <div>
      <Navbar cartCount={cartCount} />
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="container">
            <div className="checkout-layout">
          <div className="checkout-left">
            <CartItemSection
              cart={cart}
              qtyUp={qtyUp}
              qtyDown={qtyDown}
              removeItem={removeItem}
            />
            <DeliveryForm />
            <PaymentMethod />
          </div>
          <div className="checkout-summary">
            <OrderSummary
            subtotal={undsenUne}
            deliveryFee={hurgelt}
            shimtgel={tax}
            total={total}
          /> 
          </div>
        </div></div>
        
      )}
      <Footer />
    </div>
  );
}
export default CartPage;