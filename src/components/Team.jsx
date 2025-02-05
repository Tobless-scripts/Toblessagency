import Team1 from "../assets/team-member-1.png";
import Team2 from "../assets/team-member-2.png";
import Team3 from "../assets/team-member-3.png";
import Team4 from "../assets/team-member-4.png";
import facebook from "../assets/facebook-image.jpg";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

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

export default Team;
