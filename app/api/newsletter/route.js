
// app/api/newsletter/route.js
import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN, // secret write token
  useCdn: false,
});

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
    }

    // Create document in Sanity
    await client.create({
      _type: 'newsletter',
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error subscribing' },
      { status: 500 }
    );
  }
}
