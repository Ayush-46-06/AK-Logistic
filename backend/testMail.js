import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function testMail() {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.verify();
        console.log("✅ SMTP login successful, ready to send emails!");
    } catch (error) {
        console.error("❌ SMTP login failed:", error.message);
    }
}

testMail();
