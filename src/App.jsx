import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import Tracking from "./components/Tracking";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import logo from "./assets/logo.webp";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle.jsx";

function Index() {

  return (
    <>
      <div style={{
        zIndex: 1001,
        position: "fixed",
        top: 17,
        left: 17,
        background: "transparent",
        display: "flex",
        justifyContent: "space-between",
        width: "97%",
      }}>
        <div>
          <img src={logo} alt="logo" width={200} />
        </div>
        <div>
          <Toggle />
        </div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BookingForm />
      <Tracking />
      <Contact />
      <Footer />
    </>
  );
}

export default Index;
