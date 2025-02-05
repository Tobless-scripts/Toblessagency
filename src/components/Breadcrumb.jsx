import HomeIcon from "../assets/currentPage.png";
import Arrow from "../assets/about-service.png";
import propTypes from "prop-types";
import "../styles/index.css";

function Breadcrumb({ pageName }) {
    return (
        <div className="breadcrumb-container">
            <div className="breadcrumb-contents">
                <div className="breadcrumb-content1">
                    <h1>{pageName}</h1>
                </div>
                <div className="breadcrumb-content2">
                    <a href="/home">
                        <img src={HomeIcon} alt="home-icon" className="img1" />
                    </a>
                    <img src={Arrow} alt="arrow-icon" className="img2" />
                    <p>{pageName}</p>
                </div>
            </div>
        </div>
    );
}

Breadcrumb.propTypes = {
    pageName: propTypes.string.isRequired,
};

export default Breadcrumb;
