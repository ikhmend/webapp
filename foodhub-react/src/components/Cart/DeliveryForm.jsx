function DeliveryForm({ deliveryInfo, setDeliveryInfo }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setDeliveryInfo({...deliveryInfo,
            [name]: value,
        });
    }
    return (
        <div className="checkout-card">
            <h3>Хүргэлтийн мэдээлэл</h3>
            <div className="checkout-grid">
                <div className="checkout-field">
                    <label htmlFor="customer-name">Нэр</label>
                    <input name="name" value={deliveryInfo.name} onChange={handleChange} placeholder="Нэрээ оруулна уу"/>
                </div>
                <div className="checkout-field">
                    <label htmlFor="customer-phone">Утасны дугаар</label>
                    <input name="phone" value={deliveryInfo.phone} onChange={handleChange} placeholder="Утасны дугаараа оруулна уу"/>
                </div>
            </div>
            <div className="checkout-field">
                <label htmlFor="customer-district">Дүүрэг</label>
                <input name="district" value={deliveryInfo.district} onChange={handleChange} placeholder="Жишээ: Баянзүрх"/>
            </div>
            <div className="checkout-field">
                <label htmlFor="customer-address">Дэлгэрэнгүй хаяг</label>
                <input name="address" value={deliveryInfo.address} onChange={handleChange} placeholder="Гудамж, байр, орц, давхар, тоот"/>
            </div>
            <div className="checkout-field">
                <label htmlFor="customer-note">Нэмэлт мэдээлэл</label>
                <textarea name="note" value={deliveryInfo.note} onChange={handleChange} placeholder="Жишээ: Хаалга код, орцны дугаар, залгаад хэлэх гэх мэт"/>
            </div>
        </div>        
    )
}
export default DeliveryForm;