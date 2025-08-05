"use client";
import { useState } from "react";
import Link from "next/link";

export default function HeaderFive() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-yellow-400 border-b-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="logo text-3xl font-extrabold text-black uppercase tracking-wider"
          >
            Brutal<span className="text-red-500">UI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="nav-link text-black font-bold uppercase px-3 py-1 border-4 border-black hover:bg-blue-400 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link text-black font-bold uppercase px-3 py-1 border-4 border-black hover:bg-blue-400 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="/services"
              className="nav-link text-black font-bold uppercase px-3 py-1 border-4 border-black hover:bg-blue-400 hover:text-white transition"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="nav-link text-black font-bold uppercase px-3 py-1 border-4 border-black hover:bg-blue-400 hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <button className="cta-btn bg-red-500 text-white px-6 py-3 font-bold uppercase border-4 border-black hover:bg-blue-500 hover:text-white shadow-[4px_4px_0px_black]">
            Sign Up
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
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
        <div className="md:hidden bg-yellow-400 border-t-4 border-black shadow-[6px_6px_0px_black]">
          <div className="px-4 pt-4 pb-3 space-y-3 text-center">
            <Link
              href="/"
              className="block text-black font-bold uppercase border-4 border-black py-2 hover:bg-blue-400 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-black font-bold uppercase border-4 border-black py-2 hover:bg-blue-400 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-black font-bold uppercase border-4 border-black py-2 hover:bg-blue-400 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-black font-bold uppercase border-4 border-black py-2 hover:bg-blue-400 hover:text-white"
            >
              Contact
            </Link>
            <button className="w-full bg-red-500 text-white py-3 font-bold uppercase border-4 border-black hover:bg-blue-500 hover:text-white shadow-[4px_4px_0px_black]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
