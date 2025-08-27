import React, { useState } from "react";
import "./Navbar.css";
import homeIcon from "../assets/home.svg";
import serviceIcon from "../assets/services.svg";
import contactIcon from "../assets/contact.svg";
import aboutIcon from "../assets/about.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger for mobile only */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Sidebar for small screens */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <ul className="nav-links">
          <li><a href="#home" onClick={toggleMenu}><img src={homeIcon} alt="Home" className="icon" /> Home</a></li>
          <li><a href="#about" onClick={toggleMenu}><img src={aboutIcon} alt="About" className="icon" /> About</a></li>
          <li><a href="#services" onClick={toggleMenu}><img src={serviceIcon} alt="Services" className="icon" /> Services</a></li>
          <li><a href="#contact" onClick={toggleMenu}><img src={contactIcon} alt="Contact" className="icon" /> Contact</a></li>
          <li><a href="#booking" className="btn" onClick={toggleMenu}>Book Your Courier</a></li>
          <li><a href="#tracking" className="tr" onClick={toggleMenu}>Track</a></li>
        </ul>
      </nav>

      {/* Old bottom navbar for desktop/tablet */}
      <nav className="navbar desktop-navbar">
        <ul className="nav-links">
          <li><a href="#home" className="a"><img src={homeIcon} alt="Home" width={40} className="icon" /></a></li>
          <li><a href="#services" className="a"><img src={serviceIcon} alt="Services" width={40} className="icon" /></a></li>
          <li><a href="#about" className="a"><img src={aboutIcon} alt="About" width={40} className="icon" /></a></li>
          <li><a href="#contact" className="a"><img src={contactIcon} alt="Contact" width={40} className="icon" /></a></li>
          <li><a href="#booking" className="btn tr">Book Your Courier</a></li>
          <li><a href="#tracking" className="tr">Track</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
