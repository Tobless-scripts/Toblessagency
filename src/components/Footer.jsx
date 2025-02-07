import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import Partner1 from "../../public/logo-big.png";
import Partner2 from "../../public/logo.png";
import Partner3 from "../../public/logo.svg";
import Partner4 from "../../public/logo2.png";

function Footer() {
    return (
        <footer>
            <div className="partners">
                <p>Trusted By Big ones</p>
                <div className="partners-img">
                    <img src={Partner1} alt="partner" />
                    <img src={Partner2} alt="partner" />
                    <img src={Partner3} alt="partner" />
                    <img src={Partner4} alt="partner" />
                </div>
            </div>
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
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "footer-link active"
                                            : "footer-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "footer-link active"
                                            : "footer-link"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "footer-link active"
                                            : "footer-link"
                                    }
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "footer-link active"
                                            : "footer-link"
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "footer-link active"
                                            : "footer-link"
                                    }
                                >
                                    Contact
                                </NavLink>
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
