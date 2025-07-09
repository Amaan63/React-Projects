import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosHome } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="navbar bg-base-100 border-2 border-gray-700 px-4 shadow-sm">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold whitespace-nowrap">
            🌱 Habit Tracker
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-none gap-2">
          <Link to="/" className="btn btn-sm btn-info normal-case">
            <IoIosHome />
            Home Page
          </Link>
          <Link to="/add" className="btn btn-sm btn-accent normal-case">
            <IoIosAddCircleOutline /> Add Habbit
          </Link>
        </div>

        {/* Theme Selector */}

        <div className="flex-none ml-4 hidden sm:block">
          <ThemeSelector />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex-none lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <FiAlignJustify />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-base-100 border-2 border-gray-700 shadow z-50 p-4">
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="btn btn-sm btn-info w-full normal-case"
                onClick={() => setMenuOpen(false)}
              >
                <IoIosHome />
                Home Page
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="btn btn-sm btn-accent w-full normal-case"
                onClick={() => setMenuOpen(false)}
              >
                <IoIosAddCircleOutline />
                Add Habbit
              </Link>
            </li>
            <li className="sm:hidden">
              {/* Theme selector in mobile menu if screen is too small */}
              <ThemeSelector />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
