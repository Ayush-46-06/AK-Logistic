import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="animated-footer m">
      <div className="footer-section logo">
        <h2>
          <span className="ck">aK</span> LOGISTIC
        </h2>
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
        <div className="social-icons">
          <a className="icon in" href="#"><FontAwesomeIcon icon={faFacebook}/></a>
          <a className="icon in" href="#"><FontAwesomeIcon icon={faTwitter}/></a>
        </div>
      </div>
      <div className="footer-section services">
        <h3>OUR SERVICES</h3>
        <ul>
          <li>STANDARD OVERNIGHT BY TRAIN</li>
          <li>ECONOMY CARGO - DOMESTIC</li>
          <li>INTERNATIONAL</li>
          <li>COURIER AND CARGO</li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>CONTACT US</h3>
        <address>
          F/462, ( Basement) OLD MB Road,<br />
          Lado Sarai, New Delhi-110030, India
        </address>
        <p>011-47473324</p>
        <p>info@aklogistic.co.in</p>
      </div>
    </footer>
  );
};

export default Footer;
