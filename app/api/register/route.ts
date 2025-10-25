import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    // TODO: Save to DB when ready (MongoDB, PostgreSQL, etc.)

    // Send email
    await transporter.sendMail({
      ...mailOptions,
      to: email,
      subject: "Welcome to Auth App 🚀",
      text: `Hello ${username}, welcome to our app!`,
      html: `<h2>Hello ${username},</h2><p>Welcome to our app! 🎉</p>`,
    });

    return NextResponse.json({ message: "User registered & email sent!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
