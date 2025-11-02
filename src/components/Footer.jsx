// src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-center py-3 sm:py-4 text-xs sm:text-sm text-gray-600 bg-white px-3 sm:px-4">
      <p className="truncate">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <a
          href="https://github.com/rtjsh-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500 transition-colors"
        >
          Rajesh
        </a>
      </p>
    </footer>
  );
};
