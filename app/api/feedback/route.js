import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { json } from "next/dist/compiled/express/server/response";

export async function GET(req) {
  return new Response("Hello, Next.js!");
}


export async function POST(req) {
    if (req.method === "POST") {
      try {
        const formInfo = await req.json();
        console.log(formInfo);
        

        const output = `
            <h3>You have a new request</h3>
            ${formInfo.email ? `<p>Email: ${formInfo.email}</p>` : ""}
            <p>Message: ${formInfo.message}</p>
        `;

        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: process.env.auth_email,
            pass: process.env.gmail_password,
          },
        });


        const mailOptions = {
          from: formInfo.email && formInfo.email.trim() !== "" ? formInfo.email : process.env.sender_email,
          to: process.env.recipient_email,
          subject: "MemaTech Website Feedback",
          html: output,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info);

        return NextResponse.json({ message: "Request successful", data: formInfo });
      } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "An error occurred" });
      }
    } else {
      return NextResponse.json({ error: "Method not allowed" });
    }
}