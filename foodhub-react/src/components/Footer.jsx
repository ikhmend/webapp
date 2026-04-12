import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
function Footer () {
    return (
        <div id="main-footer">
        <div className="footer-inner">
            <div className="footer-top">
                <div className="footer-brand">
                    <a href="#" className="footer-logo">
                        <span className="footer-brand-circle">F</span>
                        <span className="footer-brand-name">FoodHub</span>
                    </a>
                    <p className="footer-tagline">Discover and order from the best local restaurants.</p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Twitter"><FaXTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>For Restaurants</h4>
                    <ul>
                        <li><a href="#">Partner With Us</a></li>
                        <li><a href="#">Restaurant Dashboard</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            <div className="footer-divider">
            <div className="footer-bottom">
                <span className="footer-copy">&copy; 2026 FoodHub. All rights reserved.</span>
                <a href="#" className="footer-admin-link">
                    <i className="fa-regular fa-circle-question"></i>
                    Admin Portal
                </a>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
export default Footer;