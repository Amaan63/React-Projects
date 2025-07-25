import React from "react";
import ThemeSelector from "./ThemeSelector";
import { Moon, Palette, TrendingUp } from "lucide-react";
import navbarIcon from "../assets/NavbarIcon.png";

const Header = ({ setCurrentTheme, currentTheme }) => {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-xl shadow-2xl border-b border-base-300/50 sticky top-0 z-50">
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={navbarIcon}
                alt="Navbar Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TaskFlow Pro
            </h1>
            <p className="text-xs text-base-content/60">
              Advanced Task Management
            </p>
          </div>
        </div>
      </div>

      <ThemeSelector
        setCurrentTheme={setCurrentTheme}
        currentTheme={currentTheme}
      />
    </div>
  );
};

export default Header;
