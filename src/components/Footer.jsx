// src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-center py-4 text-sm text-gray-600 bg-white">
      Made with <span className="text-red-500">❤️</span> by{" "}
      <a
        href="https://github.com/rtjsh"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-500"
      >
        Rajesh
      </a>
    </footer>
  );
};
