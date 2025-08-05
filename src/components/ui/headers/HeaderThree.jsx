"use client";
import { useState } from "react";
import Link from "next/link";

export default function HeaderThree() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg rounded-b-2xl border-b-4 border-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-pink-500 tracking-tight logo"
          >
            Fun<span className="text-yellow-400">Zone</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="nav-link text-blue-500 font-semibold hover:text-pink-500"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="nav-link text-green-500 font-semibold hover:text-pink-500"
            >
              Games
            </Link>
            <Link
              href="/events"
              className="nav-link text-yellow-500 font-semibold hover:text-pink-500"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="nav-link text-purple-500 font-semibold hover:text-pink-500"
            >
              Contact
            </Link>
            <button className="cta-btn bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold hover:opacity-90">
              Let’s Go!
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-pink-500 focus:outline-none"
            >
              {/* Hamburger */}
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
        <div className="md:hidden bg-white shadow-md rounded-b-2xl border-t-4 border-yellow-400">
          <div className="px-4 pt-4 pb-3 space-y-3">
            <Link
              href="/"
              className="block text-blue-500 font-semibold hover:text-pink-500"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="block text-green-500 font-semibold hover:text-pink-500"
            >
              Games
            </Link>
            <Link
              href="/events"
              className="block text-yellow-500 font-semibold hover:text-pink-500"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block text-purple-500 font-semibold hover:text-pink-500"
            >
              Contact
            </Link>
            <button className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold hover:opacity-90">
              Let’s Go!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
