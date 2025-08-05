"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeaderSix() {
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
       ".search-bar",
       { width: 0, opacity: 0 },
       { width: 160, opacity: 1, duration: 1, ease: "elastic.out(1,0.8)" },
       "-=0.3"
     )
     .fromTo(
       ".cta-btn",
       { opacity: 0, x: 50 },
       { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
       "-=0.6"
     );
 }, []);


  return (
    <nav className="w-full bg-[#0a0a0f] shadow-lg border-b border-cyan-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="logo text-3xl font-extrabold tracking-widest text-cyan-400 drop-shadow-[0_0_12px_#0ff]"
          >
            Cyber
            <span className="text-pink-500 drop-shadow-[0_0_12px_#f0f]">
              Edge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="nav-link relative font-bold tracking-wider text-cyan-400 drop-shadow-[0_0_10px_#0ff] hover:text-pink-500 hover:drop-shadow-[0_0_14px_#f0f] transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar bg-transparent border-2 border-cyan-400 text-white px-4 py-2 rounded-full placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-[0_0_10px_#0ff]"
            />
            <button className="cta-btn bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold px-6 py-2 rounded-full shadow-[0_0_15px_#f0f] hover:opacity-90 transition">
              Join Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400 focus:outline-none"
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
        <div className="md:hidden bg-[#0a0a0f] border-t border-cyan-500">
          <div className="px-4 pt-4 pb-3 space-y-3 text-center">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-cyan-400 drop-shadow-[0_0_10px_#0ff] hover:text-pink-500 hover:drop-shadow-[0_0_14px_#f0f] font-bold text-lg"
              >
                {item}
              </Link>
            ))}
            <button className="w-full bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold py-3 rounded-full shadow-[0_0_15px_#f0f]">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
