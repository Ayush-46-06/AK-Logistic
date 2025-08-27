import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            setStatus(res.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("Error sending message. Try again later.");
        }
    };

    return (
        <div className="contact-container" id="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
            <p className="status">{status}</p>
        </div>
    );
};

export default Contact;
