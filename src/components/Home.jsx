import Header from "./Header";
import Team from "./Team";
import "../styles/Home.css";
import project1 from "../assets/blog-1-1.jpg";
import project2 from "../assets/blog-2-700.jpg";
import project3 from "../assets/blog-4.jpg";
import project4 from "../assets/blog-5-630-1.jpg";
import project5 from "../assets/project8.jpg";
import Footer from "./Footer";
import WhatWeDo from "./WhatWeDo";

function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <WhatWeDo />
            <Works />
            <Team />
            <Footer />
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
                        <div className="image-wrapper">
                            <img src={project1} alt="project1" />
                        </div>
                        <h2>TRUE SNEAKERS</h2>
                        <p>Brand Design, Photography</p>
                    </div>

                    <div className="projects moveDown2">
                        <div className="image-wrapper">
                            <img src={project2} alt="project2" />
                        </div>
                        <h2>PENCILS OF ART</h2>
                        <p>3D Design, Brand Design</p>
                    </div>

                    <div className="projects">
                        <div className="image-wrapper">
                            <img src={project3} alt="project3" />
                        </div>
                        <h2>MODELLING PHOTOS</h2>
                        <p>3D Design, Photography</p>
                    </div>

                    <div className="projects moveDown2">
                        <div className="image-wrapper">
                            <img src={project4} alt="project4" />
                        </div>
                        <h2>HAPPY GIRL</h2>
                        <p>3D Design, Photography</p>
                    </div>

                    <div className="projects" id="ignore">
                        <h1>See all works</h1>
                    </div>

                    <div className="projects moveDown2">
                        <div className="image-wrapper">
                            <img src={project5} alt="project5" />
                        </div>
                        <h2>MINIMAL DESIGN</h2>
                        <p>3D Design, Photography</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
