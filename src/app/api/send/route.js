import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const fromemail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    // const body = await req.json();
    // const { email, subject, message } = body;
    const response = await resend.emails.send({
      from: "bhardwajsaksham706@gmail.com",
      to: ["bhardwajsaksham776@gmail.com"],
      subject: "hello",
      react: (
        <div>
          {/* <h1>{subject}</h1> */}
          <p>Thank you for contacting us!</p>
          <p>New Message submitted</p>
          {/* <p>{message}</p> */}
        </div>
      ),
    });

    console.log("Email send response:", response);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
