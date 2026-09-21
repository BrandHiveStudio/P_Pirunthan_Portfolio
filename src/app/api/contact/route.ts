import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "piru.exports@gmail.com";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload. Please provide form fields." },
        { status: 400 }
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "General Inquiry";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // Field validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Please provide a valid name (2–100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 150) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 5 || message.length > 5000) {
      return NextResponse.json(
        { error: "Please enter a message between 5 and 5,000 characters." },
        { status: 400 }
      );
    }

    // Server-side environment checks
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not yet configured on the server. Please set the RESEND_API_KEY environment variable.",
        },
        { status: 503 }
      );
    }

    if (!fromEmail) {
      return NextResponse.json(
        {
          error:
            "Sender address is not configured on the server. Please set the CONTACT_FROM_EMAIL environment variable.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
    const submittedAt = new Date().toUTCString();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 24px; margin: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #151b2c; border: 1px solid #24304c; border-radius: 16px; overflow: hidden;">
    <tr>
      <td style="padding: 24px; background-color: #111726; border-bottom: 1px solid #24304c;">
        <span style="display: inline-block; padding: 4px 12px; background-color: rgba(18, 189, 247, 0.15); color: #12BDF7; border: 1px solid rgba(18, 189, 247, 0.3); border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          New Portfolio Inquiry
        </span>
        <h1 style="font-size: 20px; font-weight: 800; color: #ffffff; margin: 12px 0 0 0;">
          Project Inquiry from ${safeName}
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px; color: #cbd5e1;">
          <tr>
            <td width="130" style="font-weight: 600; color: #94a3b8; border-bottom: 1px solid #1c2438;">Client Name:</td>
            <td style="color: #ffffff; font-weight: 600; border-bottom: 1px solid #1c2438;">${safeName}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: #94a3b8; border-bottom: 1px solid #1c2438;">Client Email:</td>
            <td style="border-bottom: 1px solid #1c2438;"><a href="mailto:${safeEmail}" style="color: #12BDF7; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: #94a3b8; border-bottom: 1px solid #1c2438;">Inquired Area:</td>
            <td style="color: #ffffff; border-bottom: 1px solid #1c2438;">${safeService}</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: #94a3b8;">Submission Time:</td>
            <td style="color: #94a3b8;">${submittedAt}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 18px; background-color: #1c2438; border: 1px solid #24304c; border-radius: 12px;">
          <span style="display: block; font-size: 11px; font-weight: 700; color: #12BDF7; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
            Message Content
          </span>
          <div style="font-size: 14px; line-height: 1.6; color: #f8fafc;">
            ${safeMessage}
          </div>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${safeEmail}?subject=Re:%20Project%20Inquiry%20-%20${encodeURIComponent(name)}" style="display: inline-block; padding: 10px 20px; background: linear-gradient(135deg, #0284c7, #12BDF7); color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 10px;">
            Reply to ${safeName}
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 24px; background-color: #111726; border-top: 1px solid #24304c; font-size: 11px; color: #64748b; text-align: center;">
        Sent via P Pirunthan Developer Portfolio Contact Form
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const plainText = `
New Project Inquiry from P Pirunthan Portfolio

Client Name: ${name}
Client Email: ${email}
Inquired Service: ${service}
Submitted At: ${submittedAt}

Message:
${message}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `Project Inquiry: ${name} — ${service}`,
      text: plainText,
      html: emailHtml,
    });

    if (error) {
      // Do not leak sensitive internals, return user-safe error message
      return NextResponse.json(
        {
          error:
            error.message ||
            "Unable to deliver email via Resend. Please check domain verification and sender credentials.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
        message: "Your inquiry was successfully delivered.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : "An unexpected internal server error occurred.";
    return NextResponse.json(
      { error: `Failed to process message: ${errorMsg}` },
      { status: 500 }
    );
  }
}
