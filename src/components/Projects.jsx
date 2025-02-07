import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import "../styles/Project.css";
import project1 from "../assets/blog-1-1.jpg";
import project2 from "../assets/blog-2-700.jpg";
import project3 from "../assets/blog-4.jpg";
import project4 from "../assets/blog-5-630-1.jpg";
import project5 from "../assets/project8.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";

export default function Project() {
    return (
        <>
            <Header />
            <Breadcrumb pageName="Projects" />
            <Main />
            <Footer />
        </>
    );
}

function Main() {
    return (
        <div>
            <Projects />
        </div>
    );
}

function Projects() {
    return (
        <div>
            <div className="projects-container1">
                <div className="projects-content1">
                    <div className="projects1">
                        <div className="projects1-img">
                            <img src={project1} alt="project1" />
                        </div>
                        <div className="projects1-text">
                            <h2>True Sneakers</h2>
                        </div>
                    </div>
                    <div className="projects1">
                        <div className="projects1-img">
                            <img src={project2} alt="project1" />
                        </div>
                        <div className="projects1-text">
                            <h2>Pencils of Arts</h2>
                        </div>
                    </div>
                    <div className="projects1">
                        <div className="projects1-img">
                            <img src={project3} alt="project1" />
                        </div>
                        <div className="projects1-text">
                            <h2>ModellingUpdate </h2>
                        </div>
                    </div>
                    <div className="projects1">
                        <div className="projects1-img">
                            <img src={project4} alt="project1" />
                        </div>
                        <div className="projects1-text">
                            <h2>Happy Girl</h2>
                        </div>
                    </div>
                    <div className="projects1">
                        <div className="projects1-img">
                            <img src={project5} alt="project1" />
                        </div>
                        <div className="projects1-text">
                            <h2>Egg Rocket</h2>
                        </div>
                    </div>
                    <div className="projects1">
                        <div className="projects1-img">
                            <img src={project6} alt="project1" />
                        </div>
                        <div className="projects1-text">
                            <h2>Candle</h2>
                        </div>
                    </div>
                    <div className="projects1">
                        <div className="projects1-img">
                            <img src={project7} alt="project1" />
                        </div>
                        <div className="projects1-text">
                            <h2>Pink Gun</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
