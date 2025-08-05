"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function NatureHeader({ showcase = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    tl.fromTo(
      ".nature-logo",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    )
      .fromTo(
        ".nature-link",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .fromTo(
        ".nature-cta",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      );

    // Floating leaves with rotation
    gsap.to(".leaf-icon", {
      y: 15,
      rotate: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      stagger: 0.4,
    });
  }, []);

  const handleClick = (e) => {
    if (showcase) e.preventDefault();
  };

  return (
    <nav className="relative w-full bg-gradient-to-r from-green-800 via-green-600 to-green-800 shadow-lg z-50">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#4ade80,_transparent_50%)] opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-lg bg-white/10 rounded-b-xl">
        <div className="flex justify-between items-center h-16 relative">
          {/* Floating Icons */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 flex space-x-4">
            <span className="leaf-icon text-2xl">🍃</span>
            <span className="leaf-icon text-2xl">🌿</span>
            <span className="leaf-icon text-2xl">🍂</span>
          </div>

          {/* Logo */}
          <Link
            href="/"
            onClick={handleClick}
            className="nature-logo text-3xl font-extrabold text-white drop-shadow-md"
          >
            Green<span className="text-yellow-300">Life</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Gallery", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="nature-link text-white hover:text-yellow-300 transition drop-shadow hover:scale-110 duration-300"
              >
                {item}
              </Link>
            ))}
            <button className="nature-cta bg-yellow-300 text-green-800 px-5 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:shadow-xl transition duration-300">
              Explore Nature
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
        <div className="md:hidden bg-green-700 shadow-md backdrop-blur-md">
          <div className="px-4 pt-4 pb-3 space-y-3">
            {["Home", "Gallery", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={handleClick}
                className="block text-white hover:text-yellow-300 transition"
              >
                {item}
              </Link>
            ))}
            <button className="w-full bg-yellow-300 text-green-800 font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 transition">
              Explore Nature
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
