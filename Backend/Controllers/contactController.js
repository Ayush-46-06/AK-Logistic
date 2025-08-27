import Contact from "../models/Contact.js";
import transporter from "../config/mailer.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save message to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    const mailOptions = {
      from: email,
      to: "yourEmail@gmail.com",  // 🔴 Replace with where you want messages
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "✅ Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
};