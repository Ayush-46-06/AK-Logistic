import React from "react";
import "./Services.css";
import airImg from "../assets/5.webp"
import roadImg from "../assets/6.webp";
import trainImg from "../assets/3.webp";

function Services() {
  return (
    <section id="services" className="services m">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <img src={airImg} alt="" className="img-t" />
          <h3>Air Freight</h3>
          <p>Fastest deliveries for urgent packages.</p>
        </div>
        <div className="card">
          <img src={roadImg} alt="" className="img-t " />
          <h3>Road Transport</h3>
          <p>Reliable and cost-effective for short & medium distances.</p>
        </div>
        <div className="card">
          <img src={trainImg} alt="" className="img-t" />
          <h3>Train Cargo</h3>
          <p>Efficient shipping for large and heavy goods.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
