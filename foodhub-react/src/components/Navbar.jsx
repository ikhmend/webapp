import { Link } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
function Navbar({ cartCount }) {
  return (
    <header id="navbar">
      <div className="container nav-container">
        <div className="brand-row">
          <Link to="/" className="site-logo">
            <div className="brand-circle">F</div>
            <span className="brand-text">FoodHub</span>
          </Link>
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/cart" className="cart-link">
              <FaCartShopping />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUser />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;