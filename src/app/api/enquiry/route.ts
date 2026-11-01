import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message, bot_check } = body;

    // Basic spam protection via honeypot
    if (bot_check) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief project description (at least 10 characters)." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.RECEIVING_EMAIL || "vaishnavisakthijagadeeswaran@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Dev mode: log securely on the server
      console.log("=== [PORTFOLIO ENQUIRY RECEIVED (DEV MODE)] ===");
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${company || "Not provided"}`);
      console.log(`Service: ${service || "Not specified"}`);
      console.log(`Budget: ${budget || "Not specified"}`);
      console.log(`Message:\n${message}`);
      console.log("===============================================");

      return NextResponse.json({
        success: true,
        devMode: true,
        message:
          "Enquiry recorded! Note: Configure RESEND_API_KEY in .env.local to deliver directly to your email inbox.",
      });
    }

    // Production Resend delivery
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Enquiry <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${name} — ${service || "Creative Project"}`,
      html: `
        <div style="font-family: sans-serif; background: #07060A; color: #FBFBFD; padding: 32px; border-radius: 12px;">
          <h2 style="color: #FF1F8E; margin-top: 0;">New Client Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #FF1F8E;">${email}</a></p>
          <p><strong>Company / Brand:</strong> ${company || "N/A"}</p>
          <p><strong>Service Required:</strong> ${service || "N/A"}</p>
          <p><strong>Budget:</strong> ${budget || "N/A"}</p>
          <hr style="border: 1px solid rgba(255,255,255,0.1); margin: 24px 0;" />
          <h3 style="color: #ffffff;">Project Description:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #D4D2DC;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Email delivery failed. Please contact directly via email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Your enquiry has been successfully delivered to Vaishnavi Sakthi.",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    console.error("Error processing enquiry:", err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
