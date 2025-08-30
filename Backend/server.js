import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
console.log("📩 Email Config Check:");
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Not Loaded ❌");
console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);

const app = express();
app.use(cors());
app.use(express.json())




// Use modular routes
app.use("/api", bookingRoutes);
app.use("/api/contact", contactRoutes)

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ Error:", err));
