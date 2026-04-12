function OrderSummary (subtotal, deliveryFee, total) {
    return (
        <aside className="checkout-summary-card">
            <h3>Захиалгын мэдээлэл</h3>
            <div className="summary-row">
                <span>Үндсэн үнэ</span>
                <strong>{"энд үнэ нэмэх функц байна"}</strong>
            </div>
            <div className="summary-row">
                <span>Хүргэлтийн үнэ</span>
                <strong>{deliveryFee}</strong>
            </div>
            <div className="summary-row">
                <span>Үйлчилгээний шимтгэл</span>
                <strong>{"энд шимтгэлийн функц байна"}</strong>
            </div>
            <button className="place-order-btn" type="button">Place Order</button>
        </aside>
    )
}
export default OrderSummary;