const detailsSection = document.getElementById("details");
const menuSection = document.getElementById("menu-section");
const reviewsSection = document.getElementById("reviews-section");
const infoSection = document.getElementById("info-section");
const cartCountElement = document.getElementById("cart-count");
let restaurantData = null;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCartCount() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (!cartCountElement) return;
    cartCountElement.textContent = totalQuantity;
}
function addToCart(itemId) {
    console.log("addToCart ажиллалаа", itemId);
    if (!restaurantData) return;
    let selectedItem = null;
    for (const group of restaurantData.menu) {
        const found = group.items.find(item => item.id === itemId);
        if (found) {
            selectedItem = found;
            break;
        }
    }
    if (!selectedItem) return;
    const existing = cart.find(item => item.id === itemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: selectedItem.id,
            name: selectedItem.name,
            price: selectedItem.price,
            image: selectedItem.image,
            quantity: 1
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    console.log(cart);
}
window.addToCart = addToCart;
function renderDetails(data) {
    detailsSection.innerHTML = `
        <div class="details-hero">
            <img src="${data.heroImage}" alt="${data.name}">
            <div class="hero-overlay"></div>
        </div>
        <div class="details-content">
            <div class="details-container">
                <h1>${data.name}</h1>
                <div class="meta-row">
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <strong>${data.rating}</strong>
                        <span>(${data.reviewCount} reviews)</span>
                    </span>
                    <span class="dot">•</span>
                    <span>${data.cuisine.join(", ")}</span>
                    <span class="dot">•</span>
                    <span>${data.priceLevel}</span>
                </div>
                <div class="meta-row secondary">
                    <span><i class="fa-regular fa-clock"></i> ${data.deliveryTime}</span>
                    <span><i class="fa-solid fa-location-dot"></i> ${data.distance}</span>
                    <span>Delivery: ${data.deliveryFee}</span>
                </div>
                <div class="offer-badge">${data.offer}</div>
            </div>
        </div>
    `;
}
function renderMenu(data) {
    menuSection.innerHTML = data.menu.map(group => `
        <div class="menu-group">
            <h2 class="dund-text">${group.category}</h2>
            ${group.items.map(item => `
                <article class="food-item">
                    ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
                    <div class="food-content">
                        <h3>${item.name}</h3>
                        ${item.status ? `<span class="status">${item.status}</span>` : ""}
                        <p class="light-text">${item.description}</p>
                        <div class="food-footer">
                            <p class="dund-text">${item.price}</p>
                            <button class="dark-button" type="button" onclick="addToCart(${item.id})">+Нэмэх</button>
                        </div>
                    </div>
                </article>
            `).join("")}
        </div>
    `).join("");
}
function getStars(rating) {
    const full = "★".repeat(Math.floor(rating));
    const empty = "☆".repeat(5 - Math.floor(rating));
    return full + empty;
}
function renderReviews(data) {
    const dist = data.reviewsSummary.distribution;
    reviewsSection.innerHTML = `
        <div class="reviews-container">
            <div class="review-summary-card">
                <div class="summary-left">
                    <h2>${data.reviewsSummary.average}</h2>
                    <div class="summary-stars">${getStars(data.reviewsSummary.average)}</div>
                    <p>${data.reviewsSummary.total} reviews</p>
                </div>
                <div class="summary-right">
                    ${[5,4,3,2,1].map(star => `
                        <div class="rating-row">
                            <span>${star}★</span>
                            <div class="bar">
                                <div class="fill" style="width: ${dist[star]}%;"></div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
            ${data.reviews.map(review => `
                <div class="review-card">
                    <div class="review-header">
                        <img src="${review.avatar}" alt="${review.name}">
                        <div class="review-meta">
                            <h3>${review.name}</h3>
                            <div class="review-rating-date">
                                <span class="stars">${getStars(review.rating)}</span>
                                <span class="review-date">${review.date}</span>
                            </div>
                        </div>
                    </div>
                    <p class="review-text">${review.text}</p>
                </div>
            `).join("")}
        </div>
    `;
}

function renderInfo(data) {
    infoSection.innerHTML = `
        <div class="info-container">
            <div class="info-card">
                <h2>About</h2>
                <p class="info-about">${data.info.about}</p>
                <div class="info-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <h3>Address</h3>
                        <p>${data.info.address}</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <h3>Phone</h3>
                        <p>${data.info.phone}</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fa-regular fa-clock"></i>
                    <div>
                        <h3>Hours</h3>
                        <p>${data.info.hours}</p>
                    </div>
                </div>
                <div class="info-tags">
                    <h3>Tags</h3>
                    <div class="tag-list">
                        ${data.info.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                    </div>
                </div>
            </div>
        </div>
    `;
}
fetch("./js/restaurantData.json")
    .then(response => response.json())
    .then(data => {
        restaurantData = data;
        renderDetails(data);
        renderMenu(data);
        renderReviews(data);
        renderInfo(data);
        updateCartCount();
    })
    .catch(error => {
        console.error("Алдаа", error);
    });
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanels.forEach(panel => panel.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(`${target}-section`).classList.add("active");
        });
    });