import { NextRequest, NextResponse } from 'next/server';
import { sendEnquiryNotification } from '@/lib/telegram/bot';

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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send enquiry to Telegram
    const telegramResult = await sendEnquiryNotification({
      name,
      email,
      phone: phone || undefined,
      subject: subject || undefined,
      message,
    });

    if (!telegramResult.success) {
      console.error('Failed to send enquiry to Telegram:', telegramResult.error);
      // Still return success to user even if Telegram fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your enquiry has been sent successfully! We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Enquiry API error:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

