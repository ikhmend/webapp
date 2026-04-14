function OrderSummary({ subtotal, deliveryFee, shimtgel, total }) {
  function formatPrice(price) {
    return `${price.toLocaleString()}₮`;
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

      <button className="place-order-btn" type="button">
        Place Order
      </button>
    </aside>
  );
}

export default OrderSummary;