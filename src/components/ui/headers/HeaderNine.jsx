"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeaderNine({ showcase = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo Animation
    tl.fromTo(
      ".tech-logo",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".tech-link",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .fromTo(
        ".tech-cta",
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
        },
        "-=0.5"
      );

    // Floating Icons Effect
    gsap.to(".tech-icon", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      stagger: 0.5,
    });
  }, []);

  const handleClick = (e) => {
    if (showcase) e.preventDefault();
  };

  return (
    <nav className="relative w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-xl border-b border-cyan-500/40">
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#00f2fe,_transparent_30%)] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md">
        <div className="flex justify-between items-center h-16">
          {/* Floating Icons */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1 flex space-x-4 text-cyan-400 text-lg">
            <span className="tech-icon">⚡</span>
            <span className="tech-icon">💻</span>
            <span className="tech-icon">🔋</span>
          </div>

          {/* Logo */}
          <Link
            href="/"
            onClick={handleClick}
            className="tech-logo text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#00f2fe]"
          >
            Tech<span className="text-purple-400">Verse</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "AI", "Products", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="tech-link text-white relative group font-semibold hover:text-cyan-400 transition"
              >
                {item}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <button className="tech-cta bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-cyan-400/50 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400 focus:outline-none"
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
        <div className="md:hidden bg-gray-900 border-t border-cyan-400 shadow-md">
          <div className="px-4 pt-4 pb-3 space-y-3">
            {["Home", "AI", "Products", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="block text-white hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            ))}
            <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold px-4 py-2 rounded-full hover:shadow-cyan-400/50 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
