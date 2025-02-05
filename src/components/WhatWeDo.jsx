import card1 from "../assets/app-icon-hover.png";
import card2 from "../assets/brand-icon-hover.png";
import card3 from "../assets/con-icon-1.png";
import card4 from "../assets/ui-icon-hover.png";

function WhatWeDo() {
    return (
        <div className="what-we-do">
            <div className="whatFlex2">
                <div className="standout">
                    <h2>What we do</h2>
                    <h1>
                        We bring standout immersive experiences to everyone,
                        everywhere.
                    </h1>
                    <p>
                        This isn’t art-for-art’s sake or tech cause it’s trendy,
                        this is about redefining the interactive space. We
                        believe a talented, agile team and a fresh, insightful
                        approach.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className="experience">
                    <div className="experience-card">
                        <img src={card1} alt="app-engineer" />
                        <h2>Application Engineering</h2>
                        <p>
                            We engineer custom software, applications, and
                            websites that are highly customized.
                        </p>
                    </div>

                    <div className="experience-card moveDown">
                        <img src={card2} alt="brand-strategy" />
                        <h2>Brand strategy & identity</h2>
                        <p>
                            Your brand is the relationship you build with your
                            customer to become likable.
                        </p>
                    </div>

                    <div className="experience-card">
                        <img src={card3} alt="conversion-rate" />
                        <h2>Conversion Rate Optimization</h2>
                        <p>
                            We combine behavioral design principles, 20+ years
                            of combined industry.
                        </p>
                    </div>

                    <div className="experience-card moveDown">
                        <img src={card4} alt="interface-design" />
                        <h2>User interface Design</h2>
                        <p>
                            We utilize a human-centered design approach to
                            create design that connects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
