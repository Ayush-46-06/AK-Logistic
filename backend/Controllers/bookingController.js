import Booking from "../models/Booking.js";
import { v4 as uuidv4 } from "uuid";

function calculatePrice(mode, weight) {
  const rates = { Air: 20, Road: 10, Train: 5 };
  return rates[mode] * weight;
}

export async function createBooking(req, res) {
  const { sender, receiver, fromCity, toCity, mode, weight } = req.body;
  const price = calculatePrice(mode, weight);
  const trackingId = uuidv4();

  const newBooking = new Booking({ trackingId, sender, receiver, fromCity, toCity, mode, weight, price });
  await newBooking.save();

  res.json({ message: "Booking Successful", trackingId, price });
}

export async function trackBooking(req, res) {
  const booking = await Booking.findOne({ trackingId: req.params.id });
  if (!booking) {
    return res.status(404).json({ message: "Tracking ID not found." });
  }
  res.json(booking);
}

export async function getAllBookings(req, res) {
  const bookings = await Booking.find();
  res.json(bookings);
}

export async function updateBookingStatus(req, res) {
  const { status } = req.body;
  const booking = await Booking.findOneAndUpdate(
    { trackingId: req.params.id },
    { status },
    { new: true }
  );
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  res.json(booking);
}
