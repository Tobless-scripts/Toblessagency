import Header from "./Header";
import Footer from "./Footer";
import Team from "./Team";
import AboutImg from "../assets/about-service.png";
import TeamImg from "../assets/team-about.jpg";
import "../styles/About.css";
import Breadcrumb from "./Breadcrumb";
import ParticleBackground from "./ParticleBackground";

export default function About() {
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
            <Breadcrumb pageName="About" />
            <Mission />
            <Experience />
            <Team />
        </div>
    );
}

function Mission() {
    return (
        <div className="mission-container">
            <div className="mission-contents">
                <div className="mission-content1">
                    <h3>Our Mission</h3>
                    <h2>We are creative and agile</h2>
                    <p>
                        Creative services are a subsector of the creative
                        industries, a part of the economy that creates wealthy
                        by offering creativity for hire to other businesses.
                        Creative Services also means a department within a
                        company that does creative work such as writing,
                        designing, and production. It is often a sub-department
                        of the Marketing organization.
                    </p>
                    <AboutService />
                </div>
                <div className="mission-content2">
                    <img src={TeamImg} alt="team-img" />
                </div>
            </div>
        </div>
    );
}

function AboutService() {
    return (
        <div className="about-service-container">
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Digital Marketing</p>
            </div>
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Content Creation</p>
            </div>
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Brand Management</p>
            </div>
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Social Management</p>
            </div>
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Advertisement</p>
            </div>
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Technical Writing</p>
            </div>
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Content Management</p>
            </div>
            <div>
                <img src={AboutImg} alt="about-img" />
                <p>Brand Advertisement</p>
            </div>
            <div className="years">
                <h1>7Years</h1>
                <p>We are together</p>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className="experience-container">
            <ParticleBackground />
            <div className="content">
                <div className="experience-years">
                    <div className="experience-content">
                        <h1>160+</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div className="experience-content">
                        <h1>70</h1>
                        <p>New Ideas</p>
                    </div>
                    <div className="experience-content">
                        <h1>85K</h1>
                        <p>Projects</p>
                    </div>
                    <div className="experience-content">
                        <h1>32+</h1>
                        <p>Creatives</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
