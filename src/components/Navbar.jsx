import React from "react";
import "./Navbar.css";
import homeIcon from "../assets/home.svg";
import serviceIcon from "../assets/services.svg";
import contactIcon from "../assets/contact.svg";
import aboutIcon from "../assets/about.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home" className="a"><img src={homeIcon} alt="Home"width={40} className='icon' /></a></li>
        <li><a href="#services" className="a"><img src={serviceIcon} alt="" width={40} className='icon' /></a></li>
        <li><a href="#about" className="a"><img src={aboutIcon} alt="Home"width={40} className='icon' /></a></li>
        <li><a href="#contact" className="a"><img src={contactIcon} alt="Home"width={40} className='icon' /></a></li>
        <li><a href="#booking" className="btn tr">Book Your Courier</a></li>
        <li><a href="#tracking" className="tr">Track</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
