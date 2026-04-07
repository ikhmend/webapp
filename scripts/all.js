async function loadData(){
    const data = await fetch("../data/all.json");
    const object_data = await data.json();

    object_data.restaurants.forEach(data => {
        const section = document.getElementById("results");

        if (data.promoBadge){
            var newest = `
                        <article class="result-restaurant">
                            <a href="restaurant_detail.html" class="result-card-link">
                                <div class="restaurant-card all-card">
                                    <div class="badge-over-img">
                                        <img src="${data.image}" alt="Sakura Sushi Bar" class="offer-image">
                                        <span class="badge">${data.promoBadge}</span>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="restaurant-title">${data.name}</h3>
                                        <p class="card-meta">${data.cuisines}</p>
                                        <p class="card-stats">⭐ ${data.rating} (${data.reviewCount})</p>
                                        <div class="card-foot">
                                            <span><i class="fa-regular fa-clock"></i> ${data.deliveryTime} min</span>
                                            <span><i class="fa-solid fa-location-dot"></i> ${data.distanceMiles} mi</span>
                                        </div>
                                        <p class="delivery-fee">Delivery: $${data.deliveryFee}</p>
                                    </div>
                                </div>
                            </a>
                        </article>    
                    `
        }else {
            var newest = `
                    <article class="result-restaurant">
                        <a href="restaurant_detail.html" class="result-card-link">
                            <div class="restaurant-card all-card">
                                <div class="badge-over-img">
                                    <img src="${data.image}" alt="Sakura Sushi Bar" class="offer-image">
                                </div>
                                <div class="card-body">
                                    <h3 class="restaurant-title">${data.name}</h3>
                                    <p class="card-meta">${data.cuisines}</p>
                                    <p class="card-stats">⭐ ${data.rating} (${data.reviewCount})</p>
                                    <div class="card-foot">
                                        <span><i class="fa-regular fa-clock"></i> ${data.deliveryTime} min</span>
                                        <span><i class="fa-solid fa-location-dot"></i> ${data.distanceMiles} mi</span>
                                    </div>
                                    <p class="delivery-fee">Delivery: $${data.deliveryFee}</p>
                                </div>
                            </div>
                        </a>
                    </article>    
                `
        }

        section.innerHTML += newest;
    });

    console.log(object_data);
}

loadData();