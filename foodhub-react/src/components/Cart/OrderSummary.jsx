import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/orderApi";
function OrderSummary({subtotal,deliveryFee,shimtgel,total,cart,restaurant,deliveryInfo,paymentMethod,clearCart,}) {
  const navigate = useNavigate();
  function formatPrice(price) {
    return `${price.toLocaleString()}₮`;
  }
  async function handlePlaceOrder() {
    if (
      !deliveryInfo.name.trim() ||
      !deliveryInfo.phone.trim() ||
      !deliveryInfo.district.trim() ||
      !deliveryInfo.address.trim()
    ) {
      alert("Хүргэлтийн мэдээллээ бүрэн бөглөнө үү.");
      return;
    }
    const orderData = {
      orderId: "#FH-" + Date.now(),
      restaurantName: restaurant.name,
      deliveryTime: restaurant.deliveryTime || "25–35 мин",
      paymentMethod: paymentMethod,
      address: `${deliveryInfo.district}, ${deliveryInfo.address}`,
      customerName: deliveryInfo.name,
      customerPhone: deliveryInfo.phone,
      deliveryNote: deliveryInfo.note,
      items: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: Number(String(item.price).replace(/[^\d]/g, "")),
      })),
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      serviceFee: shimtgel,
      total: total,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    try {
      const savedOrder = await createOrder(orderData);
      clearCart();
      navigate(`/order-confirmation/${savedOrder.id}`, {
        state: savedOrder,
      });
    } catch (error) {
      console.error(error);
      alert("Захиалга илгээх үед алдаа гарлаа. Дахин оролдоно уу.");
    }
  }
  return (
    <aside className="checkout-summary-card">
      <h3>Захиалгын мэдээлэл</h3>
      <div className="summary-row">
        <span>Үндсэн үнэ</span>
        <strong>{formatPrice(subtotal)}</strong>
      </div>
      <div className="summary-row">
        <span>Хүргэлтийн үнэ</span>
        <strong>{formatPrice(deliveryFee)}</strong>
      </div>
      <div className="summary-row">
        <span>Үйлчилгээний шимтгэл</span>
        <strong>{formatPrice(shimtgel)}</strong>
      </div>
      <div className="summary-row total-row">
        <span>Нийт үнэ</span>
        <strong>{formatPrice(total)}</strong>
      </div>
      <button
        className="place-order-btn"
        type="button"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </aside>
  );
}
export default OrderSummary;