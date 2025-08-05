import { useState } from "react";
import Link from "next/link";

export default function VibrantNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md fixed top-0 left-0 z-50">
    <nav
      className={`w-full bg-white shadow-md z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-white tracking-tight"
          >
            Bright<span className="text-yellow-300">Logo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-yellow-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-yellow-300">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-300">
              Contact
            </Link>
            <button className="bg-yellow-300 text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md">
          <div className="px-4 pt-4 pb-3 space-y-3">
            <Link href="/" className="block text-white hover:text-yellow-300">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-yellow-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-yellow-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-yellow-300"
            >
              Contact
            </Link>
            <button className="w-full bg-yellow-300 text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
