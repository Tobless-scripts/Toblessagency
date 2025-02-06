import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import WhatWeDo from "./WhatWeDo";
import card1 from "../assets/app-icon-hover.png";
import card2 from "../assets/brand-icon-hover.png";
import card3 from "../assets/con-icon-1.png";
import card4 from "../assets/ui-icon-hover.png";
import "../styles/Services.css";
import Circle from "../assets/CircleBackground.png";

function Service() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

function Main() {
    return (
        <div>
            <Breadcrumb pageName="Services" />
            <WhatWeDo />
            <BusinessResource />
        </div>
    );
}

function BusinessResource() {
    return (
        <div className="business-resource-container">
            <div className="business-resource-content1">
                <h1>Our small business Resource Centers increase engagement</h1>
            </div>
            <div className="business-resource-content2">
                <div className="business-resource-services">
                    <img src={card1} alt="resource service" />
                    <h1>Consultation</h1>
                    <p>
                        An advertising agency, often referred to as a creative
                        agency, is a business dedicated to creating, planning,
                        and handling advertising.
                    </p>
                    <button>Free Consultation</button>
                </div>
                <div className="business-resource-services black-bg">
                    <img src={card2} alt="resource service" />
                    <h1>Advertisement</h1>
                    <p>
                        An advertising agency, often referred to as a creative
                        agency, is a business dedicated to creating, planning,
                        and handling advertising.
                    </p>
                    <button>Free Consultation</button>
                </div>
                <div className="business-resource-services">
                    <img src={card3} alt="resource service" />
                    <h1>Branding Strategy</h1>
                    <p>
                        An advertising agency, often referred to as a creative
                        agency, is a business dedicated to creating, planning,
                        and handling advertising.
                    </p>
                    <button>Free Consultation</button>
                </div>
                <div className="business-resource-services black-bg">
                    <img src={card4} alt="resource service" />
                    <h1>Branding Strategy</h1>
                    <p>
                        An advertising agency, often referred to as a creative
                        agency, is a business dedicated to creating, planning,
                        and handling advertising.
                    </p>
                    <button>Free Consultation</button>
                </div>
                <div className="business-resource-services">
                    <img src={card3} alt="resource service" />
                    <h1>Consultation</h1>
                    <p>
                        An advertising agency, often referred to as a creative
                        agency, is a business dedicated to creating, planning,
                        and handling advertising.
                    </p>
                    <button>Free Consultation</button>
                </div>
                <div className="business-resource-services white-bg">
                    <div
                        className="business-services"
                        style={{
                            backgroundImage: `url(${Circle})`,
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                        }}
                    >
                        <h1>GET STARTED NOW</h1>
                        <button>Free Consultation</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
