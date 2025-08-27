import React from "react";
import "./About.css";
import AboutPng from "../assets/7.webp"

function About() {
  return (
    <section id="about" className="about m">
      <div className='image'><img src={AboutPng} alt="" width={450} height={500}/></div>
        <div className='cont'>
      <h2>About Us</h2>
      <p>
        Working in the field of logistics since 2002, we laid the foundation of AK LOGISTIC in April 2011 - a renowned company engaged in Import, Export & Cargo at the domestic level including main metropolitan cities & others. As we follow all industry-specific guidelines and ensure timely legal formalities to meet customer's logistic requirements on a reasonable cost, our services are appreciated in the market, and also while rendering service, we ensure the utmost security of the products to be transported. We have obtained many customer satisfaction certificates from our clients for their excellent services.
      </p>
      <br />
      <h2>Misson</h2>
      <p>Our mission is to provide cost-effective, qualitative, and quickest service to our client's logistic requirements & thereby leading the market in quality and profitability.
</p>
      <br />
      <h2>Vision</h2>
      <p>Our vision is to be a leading service provider in the field of logistics aiming at customer, employee & society satisfaction at its peak</p>
        </div>
    </section>
  );
}

export default About;
