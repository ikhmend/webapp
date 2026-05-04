function PaymentMethod({ paymentMethod, setPaymentMethod }) {
  return (
    <div className="checkout-card">
      <h3>Төлбөрийн хэлбэр</h3>
      <label className="payment-option">
        <input
          type="radio"
          name="paymentMethod"
          value="Credit/Debit Card"
          checked={paymentMethod === "Credit/Debit Card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span>Credit/Debit Card</span>
      </label>
      <label className="payment-option">
        <input
          type="radio"
          name="paymentMethod"
          value="Бэлэн мөнгөөр"
          checked={paymentMethod === "Бэлэн мөнгөөр"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span>Бэлэн мөнгөөр /Хүргэлтийн ажилтан ирсний дараа/</span>
      </label>
    </div>
  );
}
export default PaymentMethod;