import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,   // ✅ from .env
    pass: process.env.EMAIL_PASS    // ✅ from .env
  }
});

export default transporter;

