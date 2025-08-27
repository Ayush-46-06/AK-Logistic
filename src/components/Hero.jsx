import React from "react";
import "./Hero.css";
import TruckBackground from "./Truck.jsx";

function Hero() {
  return (
    <>
    <div>
      <div className="hero-bg">
        <TruckBackground />

    </div>
    <section id="home" className="hero m">
      <h1>Fast & Reliable Courier Service Across India</h1>
      <p>AK Logistic - Delivering via Air, Road & Train</p>
      <a href="#booking" className="btn">Book Your Courier</a>
    </section>
    </div>
    </>
  );
}

export default Hero;
