function Navbar({cartCount}) {
  return (
    <nav id="navbar">
      <div className="container nav-container">
        <div className="brand-row">
          <a className="site-logo" href="#">
            <span className="brand-circle">F</span>
            <span className="brand-text">FoodHub</span>
          </a>
          <div className="delivery-info">
            <i className="fa-solid fa-location-dot"></i>
            <span>Deliver to: <strong>123 Main St</strong></span>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="cart.html" aria-label="Cart" className="cart-link">
              <i className="fa-solid fa-cart-shopping"></i>
              <span id="cart-count" className="cart-count">{cartCount}</span>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Profile">
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;