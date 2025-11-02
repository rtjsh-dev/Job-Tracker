// src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-blue-200 via-blue-300 to-indigo-300">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 text-center text-xs sm:text-sm text-gray-600">
        <p className="truncate">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <a
            href="https://github.com/rtjsh-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 transition-colors"
          >
            Rajesh
          </a>
        </p>
      </div>
    </footer>
  );
};
