import express from "express";
import {
  createBooking,
  trackBooking,
  getAllBookings,
  updateBookingStatus
} from "../Controllers/bookingController.js";
const router = express.Router();

router.post("/book", createBooking);
router.get("/track/:id", trackBooking);

// Admin routes
router.get("/admin/bookings", getAllBookings);
router.patch("/admin/bookings/:id/status", updateBookingStatus);

export default router;
