import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="foot-help">
                    <div className="foot-text">
                        <h1>Need Help?</h1>
                        <h1>info@xtragency.com</h1>
                    </div>
                    <p>&copy; 2025 All Rights Reserved</p>
                </div>
                <div className="footer-links">
                    <div className="navigation">
                        <h2>Navigation</h2>
                        <ul>
                            <li>
                                <Link to="/home" className="footer-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="footer-link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/service" className="footer-link">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="footer-link">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="footer-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="social-media2">
                        <h2>Social Media</h2>
                        <span>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                            <p>LinkedIn</p>
                        </span>
                    </div>
                    <div className="contact">
                        <h2>Contact Info</h2>
                        <span>
                            <p>115 S. Green St. [br] Chicago, IL [br] 60209</p>
                            <p> +234 (704) 857 8739 </p>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
