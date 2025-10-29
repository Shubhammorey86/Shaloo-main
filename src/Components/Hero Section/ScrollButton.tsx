"use client";

import React from "react";

const ScrollButton: React.FC = () => {
  return (
    <button
      className="flex justify-center items-center w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-full border border-white bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
      aria-label="Scroll down"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scroll-icon"
      >
        <path
          d="M24.9578 0.26001V48.622"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24.7617 49.4655L34.7008 39.5264"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M25.4894 49.4651L15.5504 39.5261"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
