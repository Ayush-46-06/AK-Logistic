import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    fromCity: "",
    toCity: "",
    mode: "Air",
    weight: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/book", formData);
    setResult(res.data);
  };

  return (
    <section id="booking" className="booking m">
      <h2>Book Your Courier</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="sender" placeholder="Sender Name" onChange={handleChange} required />
        <input type="text" name="receiver" placeholder="Receiver Name" onChange={handleChange} required />
        <input type="text" name="fromCity" placeholder="From City" onChange={handleChange} required />
        <input type="text" name="toCity" placeholder="To City" onChange={handleChange} required />
        <select name="mode" onChange={handleChange}>
          <option>Air</option>
          <option>Road</option>
          <option>Train</option>
        </select>
        <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>

      {result && (
        <div className="result">
          <h3>Booking Confirmed!</h3>
          <p>Tracking ID: {result.trackingId}</p>
          <p>Total Price: ₹{result.price}</p>
        </div>
      )}
    </section>
  );
}

export default BookingForm;
