function PaymentMethod () {
    return (
    <div className="checkout-card">
        <h3>Төлбөрийн хэлбэр</h3>
        <label className="payment-option">
            <input type="radio" name="payment" checked/>
            <span>Credit/Debit Card</span>
        </label>
        <label className="payment-option">
            <input type="radio" name="payment"/>
            <span>Бэлэн мөнгөөр /Хүргэлтийн ажилтан ирсний дараа/</span>
        </label>
    </div>
    )
}
export default PaymentMethod;