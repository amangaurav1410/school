import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import { verifyToken } from '@/lib/auth';
import { sendConfirmationEmail } from '@/lib/emailService';

// POST - Submit inquiry
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const inquiry = new Inquiry(body);
    await inquiry.save();

    // Send confirmation email (don't block the response if email fails)
    try {
      await sendConfirmationEmail(body);
      console.log('Confirmation email sent successfully');
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Continue anyway - inquiry was saved successfully
    }

    return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET - Get all inquiries (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}