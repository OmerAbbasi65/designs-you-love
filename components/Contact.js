'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: msg }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        form.reset();
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero4.png" // put your image inside /public/contact-image.jpg
            alt="Contact"
            width={500}
            height={500}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
        
        {/* Right: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#909EAE]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#909EAE]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (max 700 characters)"
              maxLength={700}
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#909EAE]"
              required
            />
            <button
              type="submit"
              className="bg-[#909EAE] text-white px-6 py-2 rounded-lg hover:bg-[#5A5A5A] transition-colors"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p
              className={`mt-3 text-sm ${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}
        </div>

        
      </div>
    </section>
  );
}
