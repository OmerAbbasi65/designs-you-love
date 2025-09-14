'use client';

import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-[#FAFDFF] border-t border-[#909EAE] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-[#5A5A5A]">DesignsYouLove</h2>
          <p className="mt-3 text-[#1A1A1A] text-sm leading-relaxed">
            DesignsYouLove is your trusted online marketplace delivering
            top-quality products at unbeatable prices. Shop smarter, live better.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#5A5A5A] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-2 py-1 rounded-lg transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-2 py-1 rounded-lg transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-2 py-1 rounded-lg transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-2 py-1 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Newsletter */}
        <div>

          <NewsletterForm />
            {/* <form className="flex" >
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded-l-lg border border-[#909EAE] focus:outline-none focus:ring-2 focus:ring-[#909EAE]"
        />
        <button
          type="submit"
          className="bg-[#909EAE] text-white px-4 py-2 rounded-r-lg hover:bg-[#5A5A5A] transition-colors"
        >
          Subscribe
        </button>
      </form> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FAFDFF] border-t border-[#909EAE] py-4">
        <p className="text-center text-sm text-[#5A5A5A]">
          © {new Date().getFullYear()} DesignsYouLove. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

