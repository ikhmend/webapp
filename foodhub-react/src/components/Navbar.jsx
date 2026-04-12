import { FaLocationDot, FaCartShopping, FaUser } from "react-icons/fa6";
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
            <FaLocationDot />
            <span>Deliver to: <strong>123 Main St</strong></span>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#" aria-label="Cart" className="cart-link">
              <FaCartShopping />
              <span id="cart-count" className="cart-count">{cartCount}</span>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Profile">
              <FaUser />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;