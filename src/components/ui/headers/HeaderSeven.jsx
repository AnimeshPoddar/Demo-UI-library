"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeaderSeven({ showcase = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo Animation
    tl.fromTo(
      ".halloween-logo",
      { opacity: 0, y: -10 }, // starting state
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" } // ending state
    )
      // Links Animation
      .fromTo(
        ".halloween-link",
        { opacity: 0, y: -8 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      // CTA Button Animation
      .fromTo(
        ".halloween-cta",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

    // Floating icons (looping animation)
    gsap.to(".halloween-icon", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, []);

  const handleClick = (e) => {
    if (showcase) e.preventDefault();
  };

  return (
    <nav
      className={`w-full bg-gradient-to-r from-purple-900 via-black to-purple-900 shadow-lg z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Floating Icons */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 flex space-x-4">
            <span className="halloween-icon">🎃</span>
            <span className="halloween-icon">🦇</span>
            <span className="halloween-icon">👻</span>
          </div>

          {/* Logo */}
          <Link
            href="/"
            onClick={handleClick}
            className="halloween-logo text-2xl font-extrabold text-orange-500"
          >
            Spooky<span className="text-green-400">Night</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Events", "Costumes", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="halloween-link text-white hover:text-orange-500 transition"
              >
                {item}
              </Link>
            ))}
            <button className="halloween-cta bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Join the Haunt
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
        <div className="md:hidden bg-purple-900 shadow-md">
          <div className="px-4 pt-4 pb-3 space-y-3">
            {["Home", "Events", "Costumes", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="block text-white hover:text-orange-500"
              >
                {item}
              </Link>
            ))}
            <button className="w-full bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Join the Haunt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
