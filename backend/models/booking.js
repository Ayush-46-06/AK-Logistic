import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  trackingId: String,
  sender: String,
  receiver: String,
  fromCity: String,
  toCity: String,
  mode: String,
  weight: Number,
  price: Number,
  status: { type: String, default: "Booked" }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
