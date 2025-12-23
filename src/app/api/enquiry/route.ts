import { NextRequest, NextResponse } from 'next/server';
import { sendEnquiryNotification } from '@/lib/telegram/bot';
import { validateEmailDetailed, validateName, validatePhone, validateMessage, sanitizeString, sanitizeHtml } from '@/lib/validation';
import { createContactEnquiry } from '@/lib/db/queries';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Validate email
    const emailValidation = validateEmailDetailed(email);
    if (!emailValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid email', details: emailValidation.errors },
        { status: 400 }
      );
    }

    // Validate name
    const nameValidation = validateName(name);
    if (!nameValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid name', details: nameValidation.errors },
        { status: 400 }
      );
    }

    // Validate phone (optional)
    if (phone) {
      const phoneValidation = validatePhone(phone);
      if (!phoneValidation.isValid) {
        return NextResponse.json(
          { error: 'Invalid phone number', details: phoneValidation.errors },
          { status: 400 }
        );
      }
    }

    // Validate message
    const messageValidation = validateMessage(message);
    if (!messageValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid message', details: messageValidation.errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeString(name),
      email: sanitizeString(email.toLowerCase()),
      phone: phone ? sanitizeString(phone) : undefined,
      subject: subject ? sanitizeString(subject) : undefined,
      message: sanitizeHtml(message),
    };

    // Get client IP and user agent for tracking
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // Save enquiry to database
    const enquiry = await createContactEnquiry({
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
      ip_address: ip,
      user_agent: userAgent,
    });

    // Send enquiry to Telegram
    const telegramResult = await sendEnquiryNotification(sanitizedData);

    if (!telegramResult.success) {
      console.error('❌ Failed to send enquiry to Telegram:', telegramResult.error);
      // Still return success to user even if Telegram fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your enquiry has been sent successfully! We will get back to you soon.',
        enquiry_id: enquiry.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 Enquiry API error:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

