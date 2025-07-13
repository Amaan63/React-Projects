import { Crown, Menu, Sparkles, X } from "lucide-react";
import React from "react";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900/95 via-violet-900/95 to-indigo-900/95 backdrop-blur-lg border-b-2 border-yellow-400/30 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-yellow-400/10"></div>
      <div className="container mx-auto px-4 py-5 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-3 rounded-2xl shadow-2xl border-2 border-yellow-300">
                <Crown className="h-10 w-10 text-purple-900" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-1">
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
              Mezbaan
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#heroSection"
              className="text-gray-100 hover:text-yellow-400 transition-all duration-300 font-semibold text-lg relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#recepies"
              className="text-gray-100 hover:text-yellow-400 transition-all duration-300 font-semibold text-lg relative group"
            >
              Recipes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#category"
              className="text-gray-100 hover:text-yellow-400 transition-all duration-300 font-semibold text-lg relative group"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-100 hover:text-yellow-400 p-3 rounded-xl hover:bg-purple-800/50 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-yellow-400/30 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-lg rounded-xl">
            <nav className="flex flex-col space-y-3 mt-6 px-4">
              <a
                href="#heroSection"
                className="text-gray-100 hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-lg"
              >
                Home
              </a>
              <a
                href="#recepies"
                className="text-gray-100 hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-lg"
              >
                Recipes
              </a>
              <a
                href="#category"
                className="text-gray-100 hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-lg"
              >
                Categories
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
