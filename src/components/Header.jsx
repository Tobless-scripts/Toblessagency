import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import close from "../assets/closeMenu.svg";
import "../styles/Header.css";
import { useState } from "react";
import propTypes from "prop-types";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook-image.jpg";
import backgroundImage from "../assets/backgroundImage.webp";
import arrow from "../assets/arrowUp.png";

function Header() {
    const [showExplanation, setShowExplanation] = useState(false);

    const toggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    const closeExplanation = () => {
        setShowExplanation(false);
    };

    const [showNavigation, setShowNavigation] = useState(false);

    const toggleNavigation = () => {
        setShowNavigation(!showNavigation);
    };

    const closeNavigation = () => {
        setShowNavigation(false);
    };

    window.onscroll = function () {
        var header = document.querySelector(".header");
        if (window.scrollY > 30) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        const scrollToTop = document.getElementById("scrollToTop");
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    };

    let scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const links = document.querySelectorAll(".navBar-link");
    links.forEach((link) => {
        if (link) {
            link.classList.add("border-bottom");
        }
    });

    return (
        <div className="header-container">
            <header className="header" onToggle={toggleExplanation}>
                <div className="logo">
                    <img src={logo} alt="" className="logo" />
                </div>

                <div className="nav-bar">
                    <ul className="links">
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive
                                        ? "navBar-link active"
                                        : "navBar-link"
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
                                        ? "navBar-link active"
                                        : "navBar-link"
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
                                        ? "navBar-link active"
                                        : "navBar-link"
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
                                        ? "navBar-link active"
                                        : "navBar-link"
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
                                        ? "navBar-link active"
                                        : "navBar-link"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div
                        className="brief-explanation"
                        onClick={toggleExplanation}
                    >
                        <div className="menu"></div>
                        <div className="menu"></div>
                        <div className="menu"></div>
                    </div>

                    <div
                        className="navbar-dropdown"
                        onClick={toggleNavigation}
                        id="menu-toggle"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>

            <div>
                {showExplanation && <Explanation onClose={closeExplanation} />}
            </div>

            <div>
                {showNavigation && <Navigation onClose={closeNavigation} />}
            </div>

            <img
                src={arrow}
                alt="arrowCircle"
                onClick={scrollToTop}
                id="scrollToTop"
            ></img>
        </div>
    );
}

function Navigation({ onClose }) {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
    };

    const imageStyle = {
        width: "2rem",
        padding: "2rem 0",
        cursor: "pointer",
        transition: "all 0.6s ease-in-out",
        filter: "brightness(5)",
        transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
    };
    return (
        <div className="navigation-container navbar-sticky">
            <div className="navigation-content">
                <div className="close" onClick={onClose}>
                    <img
                        className="rotate-img"
                        src={close}
                        alt="close"
                        style={imageStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
                <div className="mobile-navigation" style={styles}>
                    <div className="filter-reduce">
                        <ul>
                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mobile-link active"
                                            : "mobile-link"
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
                                            ? "mobile-link active"
                                            : "mobile-link"
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
                                            ? "mobile-link active"
                                            : "mobile-link"
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
                                            ? "mobile-link active"
                                            : "mobile-link"
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
                                            ? "mobile-link active"
                                            : "mobile-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="media2">
                            <div className="media-img">
                                <img src={twitter} id="twitter" alt="twitter" />
                                <img src={facebook} alt="facebook" />
                                <img src={instagram} alt="instagram" />
                            </div>
                            <h2>&copy; 2025 All Rights Reserved</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Explanation({ onClose }) {
    const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        width: "2rem",
        padding: "2rem 0",
        cursor: "pointer",
        transition: "all 0.6s ease-in-out",
        filter: "brightness(5)",
        transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
    };
    return (
        <div className="explanation-container  navbar-sticky">
            <div className="explanation-content">
                <div className="close" onClick={onClose}>
                    <img
                        className="rotate-img"
                        src={close}
                        alt="close"
                        style={imageStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
                <div className="explanation">
                    <div>
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div>
                        <p>
                            An advertising agency, often referred to as a
                            creative agency, is a business dedicated to
                            creating, planning, and handling advertising and
                            sometimes other forms of promotion and marketing for
                            its clients. An ad agency is generally independent
                            from the client.
                        </p>
                    </div>
                    <div className="media">
                        <div className="media-img">
                            <img src={twitter} id="twitter" alt="twitter" />
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Navigation.propTypes = {
    onClose: propTypes.func.isRequired,
};

Explanation.propTypes = {
    onClose: propTypes.func.isRequired,
};

export default Header;
