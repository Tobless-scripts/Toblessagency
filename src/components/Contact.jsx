import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import Mail from "../assets/MailBlack.png";
import Telephone from "../assets/Telephone.png";
import Location from "../assets/Location.png";
import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    return (
        <>
            <Header />
            <Breadcrumb pageName="Contact" />
            <Main />
            <Footer />
        </>
    );
}

function Main() {
    return (
        <div>
            <ContactUs />
            <Map />
            <ContactForm />
        </div>
    );
}

function ContactUs() {
    return (
        <div className="contact-container">
            <div className="contact-contents">
                <div className="detail">
                    <div className="detailImg">
                        <img src={Mail} alt="mail" />
                    </div>
                    <h2>Email</h2>
                    <p>info@xtrawcreatives.com</p>
                </div>
                <div className="detail">
                    <div className="detailImg">
                        <img src={Telephone} alt="mail" />
                    </div>
                    <h2>Phone</h2>
                    <p>+234(704) 857 8739</p>
                </div>
                <div className="detail">
                    <div className="detailImg">
                        <img src={Location} alt="mail" />
                    </div>
                    <h2>Address</h2>
                    <p>121 King Street, USA, New York</p>
                </div>
            </div>
        </div>
    );
}

function Map() {
    return (
        <div className="maps">
            <a
                href="https://www.google.com/maps/place/Agbara,+Ogun+State,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126566.9485!2d3.01237!3d6.46542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4b192f6cfb3%3A0x3c3554ccce8b4573!2sAgbara%2C+Ogun+State!5e0!3m2!1sen!2sng!4v1707210000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Agbara Map"
                    ></iframe>
                </div>
            </a>
        </div>
    );
}

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_skicb5e",
                "template_hz1pkbp",
                form.current,
                "gLYSmkZwzXwypTinl"
            )
            .then((result) => {
                console.log(result.text);
                const resultElement = document.querySelector(".result");

                // Show success message immediately
                resultElement.textContent = "Message Sent Successfully!";

                // Hide the message after 5 seconds (5000 ms)
                setTimeout(() => {
                    resultElement.textContent = "";
                }, 5000);

                form.current.reset(); // Clear form after submission
            })
            .catch((error) => {
                console.log(error.text);
                const resultElement = document.querySelector(".result");

                // Show error message immediately
                resultElement.textContent =
                    "Failed to send message, try again later.";

                // Hide the message after 5 seconds (5000 ms)
                setTimeout(() => {
                    resultElement.textContent = "";
                }, 5000);
            });
    };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name (*)"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email (*)"
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                    <select name="department" required>
                        <option value="">Select Department</option>
                        <option value="Business">Business Department</option>
                        <option value="Support">Support Department</option>
                        <option value="Technical">Technical Department</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button type="submit">Send Message</button>
                <p className="result"></p>
            </form>
        </div>
    );
};

export default Contact;
