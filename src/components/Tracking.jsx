import React, { useState } from "react";
import axios from "axios";
import "./Tracking.css";

function Tracking() {
    const [trackingId, setTrackingId] = useState("");
    const [details, setDetails] = useState(null);

    const handleTrack = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/track/${trackingId}`);
            setDetails(res.data);
        } catch {
            alert("Tracking ID not found");
        }
    };

    return (
        <section id="tracking" className="tracking m">
            <h2>Track Your Courier</h2>
            <input
                type="text"
                placeholder="Enter Tracking ID"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
            />
            <button onClick={handleTrack}>Track</button>

            {details && (
                <div className="tracking-result">
                    <p><b>From:</b> {details.fromCity} → <b>To:</b> {details.toCity}</p>
                    <p><b>Status:</b> {details.status}</p>
                    <p><b>Price:</b> ₹{details.price}</p>
                </div>
            )}
        </section>
    );
}

export default Tracking;
