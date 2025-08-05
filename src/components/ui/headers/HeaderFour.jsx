"use client";
import { useState } from "react";
import Link from "next/link";

export default function HeaderFour() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black backdrop-blur-md border-b border-white/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Left Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="nav-link text-white font-semibold hover:text-blue-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link text-white font-semibold hover:text-blue-300"
            >
              About
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="logo text-3xl font-extrabold text-white drop-shadow-md"
            >
              Glass<span className="text-blue-300">UI</span>
            </Link>
          </div>

          {/* Right Links & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/services"
              className="nav-link text-white font-semibold hover:text-blue-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="nav-link text-white font-semibold hover:text-blue-300"
            >
              Contact
            </Link>
            <button className="cta-btn bg-gradient-to-r from-blue-400 to-purple-500 text-white px-5 py-2 rounded-full font-bold">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-7 h-7"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg shadow-md border-t border-white/30">
          <div className="px-4 pt-4 pb-3 space-y-3 text-center">
            <Link
              href="/"
              className="block text-white hover:text-blue-300 font-semibold"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-blue-300 font-semibold"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-blue-300 font-semibold"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-blue-300 font-semibold"
            >
              Contact
            </Link>
            <button className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white px-5 py-2 rounded-full font-bold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
