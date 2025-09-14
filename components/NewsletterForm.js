'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    // Basic client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Sanitize input by trimming whitespace
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus('Thanks for subscribing!');
        setEmail('');
      } else {
        const data = await res.json();
        setStatus(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Error submitting');
    }
  };

  return (
    <div className="bg-[#FAFDFF] border-[#909EAE] mt-0">
      <div>
        <h3 className="text-lg font-semibold text-[#5A5A5A] mb-3">
          Stay Updated
        </h3>
        <p className="text-[#1A1A1A] text-sm mb-3">
          Subscribe to our newsletter for latest deals and updates.
        </p>

        <form className="flex" onSubmit={handleSubmit} noValidate>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-l-lg border border-[#909EAE] focus:outline-none focus:ring-2 focus:ring-[#909EAE]"
            required
          />
          <button
            type="submit"
            className="bg-[#909EAE] text-white px-4 py-2 rounded-r-lg hover:bg-[#5A5A5A] transition-colors"
          >
            Subscribe
          </button>
        </form>

        {status && <p className="text-sm mt-2">{status}</p>}
      </div>
    </div>
  );
}
