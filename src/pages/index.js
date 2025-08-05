"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PremiumNavbar from "@/components/ui/headers/PremiumHeader";
import SportyNavbar from "@/components/ui/headers/SportyHeader";
import HeaderThree from "@/components/ui/headers/HeaderThree";
import HeaderFour from "@/components/ui/headers/HeaderFour";
import HeaderFive from "@/components/ui/headers/HeaderFive";
import HeaderSix from "@/components/ui/headers/HeaderSix";
import HeaderSeven from "@/components/ui/headers/HeaderSeven";
import HeaderEight from "@/components/ui/headers/HeaderEight";
import HeaderNine from "@/components/ui/headers/HeaderNine";

const headers = [
  {
    id: 1,
    name: "Sporty Header",
    description:
      "Energetic and bold design, perfect for sports or fitness brands.",
    component: <SportyNavbar showcase={true} />,
    color: "bg-gradient-to-br from-green-500 via-blue-700 to-indigo-900",
  },
  {
    id: 2,
    name: "Premium Header",
    description: "Elegant and minimalistic design for premium websites.",
    component: <PremiumNavbar />,
    color: "bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900",
  },
  {
    id: 3,
    name: "FunZone",
    description: "Smooth animated navigation for modern web apps.",
    component: <HeaderThree showcase={false} />,
    color: "bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700",
  },
  {
    id: 4,
    name: "Premium with modern touch",
    description: "Centered logo with a sleek animated menu.",
    component: <HeaderFour showcase={false} />,
    color: "bg-gradient-to-br from-purple-700 via-pink-700 to-red-800",
  },
  {
    id: 5,
    name: "Bold design with contrast colors",
    description: "Contrast-heavy design for impactful branding.",
    component: <HeaderFive showcase={false} />,
    color: "bg-gradient-to-br from-cyan-500 via-blue-700 to-indigo-900",
  },
  {
    id: 6,
    name: "Cyberpunk",
    description: "Modern look with vibrant gradients and smooth UI.",
    component: <HeaderSix showcase={false} />,
    color: "bg-gradient-to-br from-pink-600 via-purple-700 to-black",
  },
  {
    id: 7,
    name: "Halloween",
    description: "Spooky themed header for seasonal campaigns.",
    component: <HeaderSeven showcase={false} />,
    color: "bg-gradient-to-br from-purple-900 via-indigo-950 to-black",
  },
  {
    id: 8,
    name: "Nature",
    description: "Calm, fresh, and eco-friendly design for nature brands.",
    component: <HeaderEight showcase={false} />,
    color: "bg-gradient-to-br from-green-700 via-teal-700 to-emerald-900",
  },
  {
    id: 9,
    name: "Tech Futuristic",
    description:
      "Futuristic neon style perfect for tech startups and innovation.",
    component: <HeaderNine showcase={false} />,
    color: "bg-gradient-to-br from-gray-900 via-purple-900 to-black",
  },
];

export default function HeaderShowcase() {
  const [selectedHeader, setSelectedHeader] = useState(headers[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
        Header Showcase
      </h1>

      {/* Featured Header */}
      <motion.div
        layout
        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl mb-12 p-8 relative overflow-hidden border border-gray-700"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-red-900/10 opacity-30"></div>
        <h2 className="text-3xl font-bold text-center mb-2 text-white relative z-10">
          {selectedHeader.name}
        </h2>
        <p className="text-center text-gray-400 mb-6 relative z-10">
          {selectedHeader.description}
        </p>
        <div className="border border-gray-700 rounded-xl overflow-hidden relative z-10">
          {selectedHeader.component}
        </div>
      </motion.div>

      {/* Masonry/Grid of Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {headers.map((header) => (
          <motion.div
            layout
            key={header.id}
            className={`cursor-pointer rounded-xl p-6 text-white shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ${header.color}`}
            onClick={() => setSelectedHeader(header)}
          >
            <h3 className="text-xl font-bold mb-2">{header.name}</h3>
            <p className="text-sm opacity-90">{header.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
