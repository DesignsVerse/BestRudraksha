import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createUserWithPassword, getUserByEmail } from '@/lib/db/queries';
import {
  validateEmailDetailed,
  validateName,
  validatePasswordDetailed,
  sanitizeString,
} from '@/lib/validation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, confirmPassword } = body || {};

    // Basic required fields
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, password, confirmPassword' },
        { status: 400 }
      );
    }

    // Sanitize
    const sanitizedName = sanitizeString(String(name));
    const sanitizedEmail = sanitizeString(String(email)).toLowerCase();

    // Validate name/email/password
    const nameValidation = validateName(sanitizedName);
    if (!nameValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid name', details: nameValidation.errors },
        { status: 400 }
      );
    }

    const emailValidation = validateEmailDetailed(sanitizedEmail);
    if (!emailValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid email', details: emailValidation.errors },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      );
    }

    const passwordValidation = validatePasswordDetailed(String(password));
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { error: 'Invalid password', details: passwordValidation.errors },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existing = await getUserByEmail(sanitizedEmail);
    if (existing) {
      return NextResponse.json(
        { error: 'Account already exists with this email' },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(String(password), 10);
    const user = await createUserWithPassword(sanitizedEmail, passwordHash, sanitizedName);

    console.log('✅ User signed up successfully:', user.email);

    return NextResponse.json(
      {
        success: true,
        message: 'Account created successfully! You can now sign in.',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          emailVerified: user.email_verified,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to create account. Please try again.' },
      { status: 500 }
    );
  }
}

