import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-8x1 mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
