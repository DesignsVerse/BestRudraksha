import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getUserByEmail, updateUserLastLogin } from '@/lib/db/queries';
import { validateEmail } from '@/lib/validation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Get user from database
    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check if user has a password
    if (!user.password_hash) {
      return NextResponse.json(
        { error: 'Account exists but password not set. Please contact support.' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Update last login
    await updateUserLastLogin(user.id);

    console.log('✅ User signed in successfully:', user.email);

    // In a real app, you'd create a JWT token or session here
    return NextResponse.json(
      { 
        success: true, 
        message: 'Signed in successfully!',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          emailVerified: user.email_verified
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Signin error:', error);
    return NextResponse.json(
      { error: 'Failed to sign in. Please try again.' },
      { status: 500 }
    );
  }
}