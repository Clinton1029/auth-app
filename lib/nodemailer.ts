import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true, // ✅ Forces SSL on port 465 (works with App Password)
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // ✅ App Password (16 characters, no spaces)
  },
});

export const mailOptions = {
  from: process.env.GMAIL_USER,
};
