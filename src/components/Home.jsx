import Header from "./Header";
import "../styles/Home.css";
import card1 from "../assets/app-icon-hover.png";
import card2 from "../assets/brand-icon-hover.png";
import card3 from "../assets/con-icon-1.png";
import card4 from "../assets/ui-icon-hover.png";
import Team1 from "../assets/team-member-1.png";
import Team2 from "../assets/team-member-2.png";
import Team3 from "../assets/team-member-3.png";
import Team4 from "../assets/team-member-4.png";
import facebook from "../assets/facebook-image.jpg";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import project1 from "../assets/blog-1-1.jpg";
import project2 from "../assets/blog-2-700.jpg";
import project3 from "../assets/blog-4.jpg";
import project4 from "../assets/blog-5-630-1.jpg";
import project5 from "../assets/project8.jpg";

function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <WhatWeDo />
            <Works />
            <Team />
        </div>
    );
}

function Menu() {
    return (
        <div>
            <div className="hero-container">
                <div className="hero">
                    <h1>
                        We are an <span> always curious </span>,
                        strategic-creative digital agency.
                    </h1>
                    <p>
                        Howdy! What we do is designing cracking graphic
                        experiences is the game. Shall we team up?
                    </p>
                    <div className="feature2">
                        <h2>Got a project</h2>
                        <p>Let&apos;s talk</p>
                        <h1>+234 (704) 8578 739</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

function Works() {
    return (
        <div className="work-container">
            <div className="works">
                <div className="feature">
                    <h2>Featured Works</h2>
                    <h1>
                        Our work is meticulously curated to the business
                        challenge at hand. We create insightful strategies.
                    </h1>
                </div>
            </div>
            <div className="project-container">
                <div className="project-content">
                    <div className="projects">
                        <img src={project1} alt="project1" />
                        <h2>TRUE SNEAKERS</h2>
                        <p>Brand Design, Photography</p>
                    </div>

                    <div className="projects moveDown2">
                        <img src={project2} alt="project1" />
                        <h2>PENCILS OF ART</h2>
                        <p>3D Design, Brand Design</p>
                    </div>

                    <div className="projects">
                        <img src={project3} alt="project1" />
                        <h2>MODELLING PHOTOS</h2>
                        <p>3D Design, Photography</p>
                    </div>

                    <div className="projects moveDown2">
                        <img src={project4} alt="project1" />
                        <h2>HAPPY GIRL</h2>
                        <p>3D Design, Photography</p>
                    </div>

                    <div className="projects" id="ignore">
                        <h1>See all works</h1>
                    </div>

                    <div className="projects moveDown2">
                        <img src={project5} alt="project1" />
                        <h2>MINIMAL DESIGN</h2>
                        <p>3D Design, Photography</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Team() {
    const styles = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "white",
        width: "100%",
        height: "15em",
        position: "relative",
        paddingTop: "17em",
    };
    return (
        <div className="slant">
            <div className="what-we-do">
                <div className="whatFlex">
                    <div className="experience">
                        <div
                            className="experience-card2"
                            style={{
                                backgroundImage: `url(${Team1})`,
                                ...styles,
                            }}
                        >
                            <div className="card-child">
                                <div className="media">
                                    <div className="media-child2">
                                        <img
                                            src={twitter}
                                            alt="twitter"
                                            id="twitter"
                                        />
                                    </div>
                                    <div className="media-child2">
                                        <img src={facebook} alt="facebook" />
                                    </div>
                                    <div className="media-child2">
                                        <img src={instagram} alt="instagram" />
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h2>Jason Espadan</h2>
                                    <p>Founder & CEO</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="experience-card2 moveDown"
                            style={{
                                backgroundImage: `url(${Team4})`,
                                ...styles,
                            }}
                        >
                            <div className="card-child">
                                <div className="media">
                                    <div className="media-child2">
                                        <img
                                            src={twitter}
                                            alt="twitter"
                                            id="twitter"
                                        />
                                    </div>
                                    <div className="media-child2">
                                        <img src={facebook} alt="facebook" />
                                    </div>
                                    <div className="media-child2">
                                        <img src={instagram} alt="instagram" />
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h2>Kevin Wallace</h2>
                                    <p>Creative Director</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="experience-card2"
                            style={{
                                backgroundImage: `url(${Team2})`,
                                ...styles,
                            }}
                        >
                            <div className="card-child">
                                <div className="media">
                                    <div className="media-child2">
                                        <img
                                            src={twitter}
                                            alt="twitter"
                                            id="twitter"
                                        />
                                    </div>
                                    <div className="media-child2">
                                        <img src={facebook} alt="facebook" />
                                    </div>
                                    <div className="media-child2">
                                        <img src={instagram} alt="instagram" />
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h2>Emmanuel Wanson</h2>
                                    <p>Developer</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="experience-card2 moveDown"
                            style={{
                                backgroundImage: `url(${Team3})`,
                                ...styles,
                            }}
                        >
                            <div className="card-child">
                                <div className="media">
                                    <div className="media-child2">
                                        <img
                                            src={twitter}
                                            alt="twitter"
                                            id="twitter"
                                        />
                                    </div>
                                    <div className="media-child2">
                                        <img src={facebook} alt="facebook" />
                                    </div>
                                    <div className="media-child2">
                                        <img src={instagram} alt="instagram" />
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h2>Jennifer Gray</h2>
                                    <p>Marketing Expert</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="standout">
                        <h2>TEAM MEMBER</h2>
                        <h1>
                            Meet our passionate team of creators and people who
                            do it right!
                        </h1>
                        <p>
                            We are a team of passionate people who love to do
                            the work just right and make our customers happy and
                            cool.
                        </p>
                        <button>Join our team</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
