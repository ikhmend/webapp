import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderConfirmation() {
    const navigate = useNavigate();
    const location = useLocation();
    const order = location.state || {
    orderId: "#FH-2026-001",
    restaurantName: "Artisan Pizza Co.",
    deliveryTime: "25–35 мин",
    paymentMethod: "Credit/Debit Card",
    address: "Баянзүрх, 123 Main St",
    customerName: "Guest",
    customerPhone: "99999999",
    deliveryNote: "",
    items: [
        {
        name: "Margherita Pizza",
        quantity: 1,
        price: 28000,
        },
    ],
    subtotal: 28000,
    deliveryFee: 5000,
    serviceFee: 2800,
    total: 35800,
    };
    const formatPrice = (price) => {
        return price.toLocaleString("mn-MN") + "₮";
    };
  return (
    <div>
      <Navbar />

      <main id="cart-page">
        <div className="container">
          <div className="checkout-card order-success-card">
            <div className="order-success-icon">✓</div>

            <h1>Захиалга амжилттай баталгаажлаа!</h1>

            <p className="light-text">
              Таны захиалга рестораны системд амжилттай илгээгдлээ.
            </p>

            <div className="confirmation-info">
              <div className="confirmation-info-item">
                <span>Order ID</span>
                <strong>{order.orderId}</strong>
              </div>

              <div className="confirmation-info-item">
                <span>Хүргэлтийн хугацаа</span>
                <strong>{order.deliveryTime}</strong>
              </div>
            </div>

            <div className="confirmation-block">
              <h3>Захиалгын мэдээлэл</h3>

              <div className="confirmation-row">
                <span>Ресторан</span>
                <strong>{order.restaurantName}</strong>
              </div>

              <div className="confirmation-row">
                <span>Төлбөрийн хэлбэр</span>
                <strong>{order.paymentMethod}</strong>
              </div>

              <div className="confirmation-row">
                <span>Хүргэлтийн хаяг</span>
                <strong>{order.address}</strong>
              </div>
            </div>
            <div className="confirmation-row">
                <span>Хүлээн авагч</span>
                <strong>{order.customerName}</strong>
                </div>
                <div className="confirmation-row">
                     <span>Утас</span>
                     <strong>{order.customerPhone}</strong>
                </div>
                    {order.deliveryNote && (
                    <div className="confirmation-row">
                        <span>Нэмэлт тайлбар</span>
                        <strong>{order.deliveryNote}</strong>
                    </div>
                    )}
            <div className="confirmation-block">
              <h3>Захиалсан хоол</h3>
                {order.items.map((item, index) => (
                <div className="confirmation-food-row" key={index}>
                    <div>
                    <strong>{item.name}</strong>
                    <p className="light-text">Тоо ширхэг: {item.quantity}</p>
                    </div>

                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                </div>
                ))}
            </div>
            <div className="confirmation-block">
                <h3>Төлбөрийн мэдээлэл</h3>

                <div className="confirmation-row">
                    <span>Үндсэн үнэ</span>
                    <strong>{formatPrice(order.subtotal)}</strong>
                </div>

                <div className="confirmation-row">
                    <span>Хүргэлтийн үнэ</span>
                    <strong>{formatPrice(order.deliveryFee)}</strong>
                </div>

                <div className="confirmation-row">
                    <span>Үйлчилгээний шимтгэл</span>
                    <strong>{formatPrice(order.serviceFee)}</strong>
                </div>

                <div className="confirmation-total-row">
                    <span>Нийт үнэ</span>
                    <strong>{formatPrice(order.total)}</strong>
                </div>
                </div>
                    <div className="confirmation-actions">
                    <button
                        className="dark-button"
                        onClick={() => navigate("/order-tracking")}
                    >
                        Захиалгын явц харах
                    </button>

                    <button
                        className="confirmation-secondary-btn"
                        onClick={() => navigate("/")}
                    >
                        Нүүр хуудас руу буцах
                    </button>
                    </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default OrderConfirmation;