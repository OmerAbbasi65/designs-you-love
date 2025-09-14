"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#FAFDFF] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#5A5A5A] hover:text-[#909EAE] transition-colors">
              DesignsYouLove
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#5A5A5A] hover:text-[#909EAE] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAFDFF] px-4 pb-4 space-y-2 shadow-lg">
          <Link href="/" className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
            Home
          </Link>
          <Link href="/products" className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
            Products
          </Link>
          <Link href="/about" className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
            About
          </Link>
          <Link href="/contact" className="block text-[#5A5A5A] hover:bg-[#909EAE] hover:text-white px-3 py-2 rounded-lg transition-colors">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
