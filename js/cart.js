const cartContent = document.getElementById("cart-content");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
function parsePrice(priceText) {
    return Number(String(priceText).replace(/[^\d]/g, ""));
}
function formatPrice(price) {
    return price.toLocaleString() + "₮";
}
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function updateCartCount() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (!cartCountElement) return;
    cartCountElement.textContent = totalQuantity;
}
function increaseQuantity(itemId) {
    const item = cart.find(product => product.id === itemId);
    if (!item) return;
    item.quantity += 1;
    saveCart();
    renderCart();
    updateCartCount();
}
function decreaseQuantity(itemId) {
    const item = cart.find(product => product.id === itemId);
    if (!item) return;
    item.quantity -= 1;
    if (item.quantity <= 0) {
        const index = cart.findIndex(product => product.id === itemId);
        cart.splice(index, 1);
    }
    saveCart();
    renderCart();
    updateCartCount();
}
function removeItem(itemId) {
    const index = cart.findIndex(product => product.id === itemId);
    if (index === -1) return;
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
}
function renderEmptyCart() {
    cartContent.innerHTML = `
        <div class="cart-empty-wrapper">
            <div class="cart-empty-card">
                <div class="cart-empty-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <h3 class="cart-empty-title">Your cart is empty</h3>
                <p class="cart-empty-sub">Add some delicious items to get started!</p>
                <a href="index.html" class="cart-browse-btn">Browse Restaurants</a>
            </div>
        </div>
    `;
}
function renderCart() {
    if (cart.length === 0) {
        renderEmptyCart();
        return;
    }
    const subtotal = cart.reduce((sum, item) => {
        return sum + parsePrice(item.price) * item.quantity;
    }, 0);
    const deliveryFee = 5000;
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + deliveryFee + tax;
    cartContent.innerHTML = `
        <div class="checkout-layout">
            <div class="checkout-left">
                <div class="checkout-card">
                    <h3>Миний сагс</h3>
                    <div class="cart-items">
                        ${cart.map(item => `
                            <article class="cart-item-card">
                                ${item.image ? `<img src="${item.image}" alt="${item.name}" class="cart-item-image">` : ""}
                                <div class="cart-item-info">
                                    <h3>${item.name}</h3>
                                    <p class="cart-item-price">${item.price}</p>
                                    <div class="cart-item-actions">
                                        <button type="button" class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                                        <span class="qty-value">${item.quantity}</span>
                                        <button type="button" class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                                        <button type="button" class="remove-btn" onclick="removeItem(${item.id})">Устгах</button>
                                    </div>
                                </div>
                            </article>
                        `).join("")}
                    </div>
                </div>
                <div class="checkout-card">
                    <h3>Хүргэлтийн мэдээлэл</h3>
                    <div class="checkout-grid">
                        <div class="checkout-field">
                            <label for="customer-name">Нэр</label>
                            <input type="text" id="customer-name" placeholder="Нэрээ оруулна уу">
                        </div>
                        <div class="checkout-field">
                            <label for="customer-phone">Утасны дугаар</label>
                            <input type="tel" id="customer-phone" placeholder="Утасны дугаараа оруулна уу">
                        </div>
                    </div>
                    <div class="checkout-field">
                        <label for="customer-district">Дүүрэг</label>
                        <input type="text" id="customer-district" placeholder="Жишээ: Баянзүрх">
                    </div>
                    <div class="checkout-field">
                        <label for="customer-address">Дэлгэрэнгүй хаяг</label>
                        <input type="text" id="customer-address" placeholder="Гудамж, байр, орц, давхар, тоот">
                    </div>
                    <div class="checkout-field">
                        <label for="customer-note">Нэмэлт мэдээлэл</label>
                        <textarea id="customer-note" rows="4" placeholder="Жишээ: Хаалга код, орцны дугаар, залгаад хэлэх гэх мэт"></textarea>
                    </div>
                </div>
                <div class="checkout-card">
                    <h3>Төлбөрийн хэлбэр</h3>
                    <label class="payment-option">
                        <input type="radio" name="payment" checked>
                        <span>Credit/Debit Card</span>
                    </label>
                    <label class="payment-option">
                        <input type="radio" name="payment">
                        <span>Бэлэн мөнгөөр /Хүргэлтийн ажилтан ирсний дараа/</span>
                    </label>
                </div>
            </div>
            <aside class="checkout-summary-card">
                <h3>Захиалгын мэдээлэл</h3>
                <div class="summary-row">
                    <span>Subtotal</span>
                    <strong>${formatPrice(subtotal)}</strong>
                </div>
                <div class="summary-row">
                    <span>Delivery Fee</span>
                    <strong>${formatPrice(deliveryFee)}</strong>
                </div>
                <div class="summary-row">
                    <span>Tax</span>
                    <strong>${formatPrice(tax)}</strong>
                </div>
                <div class="summary-row total-row">
                    <span>Total</span>
                    <strong>${formatPrice(total)}</strong>
                </div>
                <button class="place-order-btn" type="button">Place Order</button>
            </aside>
        </div>
    `;
}
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeItem = removeItem;
renderCart();
updateCartCount();