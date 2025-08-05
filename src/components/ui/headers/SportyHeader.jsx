"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeaderTwo({ showcase = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".logo",
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        ".nav-link",
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".cta-btn",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );
  }, []);
  
  const handleClick = (e) => {
    if (showcase) e.preventDefault();
  };

  return (
    <nav
      className={`${
        showcase ? "relative" : "fixed top-0 left-0"
      } w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 shadow-lg z-50 font-bold uppercase tracking-wide`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleClick}
            className="logo text-2xl text-white"
          >
            SportX<span className="text-black">Zone</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Teams", "Schedule", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="nav-link text-white hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
            <button className="cta-btn bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-gray-900 transition">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
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
        <div className="md:hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 shadow-md">
          <div className="px-4 pt-4 pb-3 space-y-3">
            {["Home", "Teams", "Schedule", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="block text-white hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
            <button className="w-full bg-black text-yellow-400 font-semibold px-4 py-2 rounded-lg hover:bg-gray-900 transition">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
