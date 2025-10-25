import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Username, email and password are required" },
        { status: 400 }
      );
    }

    // TODO: Save user in DB

    // ✅ Send confirmation email
    await transporter.sendMail({
      ...mailOptions,
      to: email,
      subject: "Welcome to Auth App 🚀",
      text: `Hello ${username}, welcome to our platform!`,
      html: `<h2>Hello ${username},</h2><p>Welcome to our platform! 🎉</p>`,
    });

    return NextResponse.json({
      message: "✅ User registered & email sent successfully!",
    });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        error: "Registration failed. Email not sent.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
