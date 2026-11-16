import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory rate limiting: 5 submissions per 10 minutes per IP
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = rateLimitMap.get(ip) || [];

  const recent = timestamps.filter((time) => time > windowStart);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);

  // Prune map if entries exceed 1000
  if (rateLimitMap.size > 1000) {
    for (const [storedIp, times] of rateLimitMap.entries()) {
      const valid = times.filter((time) => time > windowStart);
      if (valid.length === 0) {
        rateLimitMap.delete(storedIp);
      } else {
        rateLimitMap.set(storedIp, valid);
      }
    }
  }

  return false;
}

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || '127.0.0.1';
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Nodemailer transporter helper
function getTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY,
    },
  });
}

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data?.ok || false;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
}

// HTML email template with escaping to prevent HTML injection
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0; white-space: pre-wrap;">
        ${escapeHtml(userMessage)}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: "Portfolio",
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${escapeHtml(name)}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    const transporter = getTransporter();
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    // 1. Rate limiting check (5 submissions per 10 minutes per IP)
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json({
        success: false,
        message: 'Too many requests. Please try again later.',
      }, { status: 429 });
    }

    const payload = await request.json();

    // 2. Honeypot check for bot detection
    if (payload?.user_honey) {
      return NextResponse.json({
        success: false,
        message: 'Spam detected.',
      }, { status: 400 });
    }

    // 3. Server-side type and presence validation
    if (!payload || typeof payload !== 'object') {
      return NextResponse.json({
        success: false,
        message: 'Invalid request payload.',
      }, { status: 400 });
    }

    const { name, email, message: userMessage } = payload;

    if (typeof name !== 'string' || typeof email !== 'string' || typeof userMessage !== 'string') {
      return NextResponse.json({
        success: false,
        message: 'All fields must be text strings.',
      }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = userMessage.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      }, { status: 400 });
    }

    // 4. Length limits and email format
    if (trimmedName.length > 100) {
      return NextResponse.json({
        success: false,
        message: 'Name must not exceed 100 characters.',
      }, { status: 400 });
    }

    if (trimmedEmail.length > 100) {
      return NextResponse.json({
        success: false,
        message: 'Email must not exceed 100 characters.',
      }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json({
        success: false,
        message: 'Please provide a valid email address.',
      }, { status: 400 });
    }

    if (trimmedMessage.length > 2000) {
      return NextResponse.json({
        success: false,
        message: 'Message must not exceed 2000 characters.',
      }, { status: 400 });
    }

    // 5. Check email service credentials
    if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
      console.error('Server email credentials (EMAIL_ADDRESS / GMAIL_PASSKEY) are not configured.');
      return NextResponse.json({
        success: false,
        message: 'Email service is not configured on the server.',
      }, { status: 500 });
    }

    const message = `New message from ${trimmedName}\n\nEmail: ${trimmedEmail}\n\nMessage:\n\n${trimmedMessage}\n\n`;

    // 6. Optional Telegram notification (does not block or fail email delivery)
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;
    if (token && chat_id) {
      try {
        await sendTelegramMessage(token, chat_id, message);
      } catch (tgError) {
        console.error('Telegram notification error (optional):', tgError.message);
      }
    }

    // 7. Primary operation: Send email via Nodemailer
    const emailSuccess = await sendEmail(
      { name: trimmedName, email: trimmedEmail, message: trimmedMessage },
      message
    );

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message and email sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
}
