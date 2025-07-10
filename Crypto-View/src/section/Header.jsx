import { Bitcoin } from "lucide-react";
import React from "react";
import character from "../assets/crypto.png";

const Header = () => {
  return (
    <header className="bg-base-200 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Bitcoin className="text-primary" size={28} />
          <span className="ml-2 text-xl font-bold">Crypto-View</span>
        </div>

        <div className="navbar-center hidden lg:flex">
          <h1 className="text-white text-xl font-bold">
            Made By <span className="text-cyan-400">Amaan Sayyed</span>
          </h1>
        </div>

        {/* Avatar */}
        <div className="avatar">
          <div className="w-15 rounded-full">
            <img src={character} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
