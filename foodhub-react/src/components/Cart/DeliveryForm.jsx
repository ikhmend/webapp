function DeliveryForm () {
    return (
        <div className="checkout-card">
            <h3>Хүргэлтийн мэдээлэл</h3>
            <div className="checkout-grid">
                <div className="checkout-field">
                    <label htmlFor="customer-name">Нэр</label>
                    <input type="text" id="customer-name" placeholder="Нэрээ оруулна уу"/>
                </div>
                <div className="checkout-field">
                    <label htmlFor="customer-phone">Утасны дугаар</label>
                    <input type="tel" id="customer-phone" placeholder="Утасны дугаараа оруулна уу"/>
                </div>
            </div>
            <div className="checkout-field">
                <label htmlFor="customer-district">Дүүрэг</label>
                <input type="text" id="customer-district" placeholder="Жишээ: Баянзүрх"/>
            </div>
            <div className="checkout-field">
                <label htmlFor="customer-address">Дэлгэрэнгүй хаяг</label>
                <input type="text" id="customer-address" placeholder="Гудамж, байр, орц, давхар, тоот"/>
            </div>
            <div className="checkout-field">
                <label htmlFor="customer-note">Нэмэлт мэдээлэл</label>
                <textarea id="customer-note" rows="4" placeholder="Жишээ: Хаалга код, орцны дугаар, залгаад хэлэх гэх мэт"></textarea>
            </div>
        </div>        
    )
}
export default DeliveryForm;