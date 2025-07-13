import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-950 via-violet-900 to-indigo-950 text-gray-300 py-6 mt-16 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-yellow-400 hover:text-amber-400 transition-colors duration-300">
            Amaan Sayyed
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
