import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

// Setup client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN, // Editor or higher permissions
  useCdn: false,
});

// POST handler
export async function POST(req) {
  try {
    const body = await req.json();
    let { name, email, message } = body;

    // Basic sanitization
    name = name.replace(/[<>]/g, '');
    email = email.replace(/[<>]/g, '');
    message = message.replace(/[<>]/g, '');

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (message.length > 700) {
      return NextResponse.json(
        { message: 'Message cannot exceed 700 characters.' },
        { status: 400 }
      );
    }

    const doc = {
      _type: 'contact',
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    await client.create(doc);

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}
