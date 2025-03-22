import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-gradient-to-b from-beige-100 to-beige-300">
      {/* Container for the loader */}
      <div className="relative flex items-center justify-center">
        {/* Outer ring with Rudraksha-inspired gradient */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-transparent bg-gradient-to-r from-brown-600 via-brown-800 to-brown-600 p-1 shadow-md shadow-brown-600/40">
          {/* Inner spinning ring with earthy tones */}
          <div className="h-full w-full rounded-full border-4 border-solid border-t-brown-800 border-r-transparent border-b-brown-600 border-l-transparent"></div>
        </div>

        {/* Inner glowing bead-like center */}
        <div className="absolute h-8 w-8 animate-pulse rounded-full bg-brown-700 opacity-80 blur-sm shadow-inner shadow-brown-900/50"></div>

        {/* Orbiting bead particle */}
        <div className="absolute h-24 w-24 animate-spin-slow">
          <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-beige-200 opacity-90 shadow-sm shadow-brown-600/30"></div>
        </div>

        {/* Subtle spiritual text */}
        <div className="absolute bottom-[-40px] text-brown-800 text-sm font-medium animate-fade-in-out tracking-wide">
          Awakening...
        </div>
      </div>
    </div>
  );
};

export default PreLoader;