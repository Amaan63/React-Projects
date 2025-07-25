import { Moon, Palette, Settings } from "lucide-react";
import React from "react";

const ThemeSelector = ({ setCurrentTheme, currentTheme }) => {
  const themes = [
    {
      name: "dark",
      label: "🌙 Dark",
      gradient: "from-gray-800 to-gray-900",
      preview: "bg-gradient-to-r from-gray-800 to-gray-900",
    },
    {
      name: "synthwave",
      label: "🌆 Synthwave",
      gradient: "from-purple-600 to-pink-600",
      preview: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    {
      name: "dracula",
      label: "🧛 Dracula",
      gradient: "from-purple-800 to-red-900",
      preview: "bg-gradient-to-r from-purple-800 to-red-900",
    },
    {
      name: "night",
      label: "🌃 Night",
      gradient: "from-blue-900 to-purple-900",
      preview: "bg-gradient-to-r from-blue-900 to-purple-900",
    },
    {
      name: "black",
      label: "🖤 Black",
      gradient: "from-black to-gray-800",
      preview: "bg-gradient-to-r from-black to-gray-800",
    },
    {
      name: "forest",
      label: "🌲 Forest",
      gradient: "from-green-600 to-teal-600",
      preview: "bg-gradient-to-r from-green-600 to-teal-600",
    },
    {
      name: "coffee",
      label: "☕ Coffee",
      gradient: "from-amber-700 to-orange-800",
      preview: "bg-gradient-to-r from-amber-700 to-orange-800",
    },
    {
      name: "midnight",
      label: "🌌 Midnight",
      gradient: "from-gray-900 to-black",
      preview: "bg-gradient-to-r from-gray-900 to-black",
    },
    {
      name: "cyberpunk",
      label: "🤖 Cyberpunk",
      gradient: "from-pink-700 to-yellow-600",
      preview: "bg-gradient-to-r from-pink-700 to-yellow-600",
    },
    {
      name: "business",
      label: "🏢 Business",
      gradient: "from-gray-700 to-gray-900",
      preview: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
  ];

  return (
    <div className="flex-none">
      {/* Cool Theme Selector */}
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle relative group hover:bg-primary/20 transition-all duration-300"
        >
          <div className="relative">
            <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
          </div>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] mt-3 p-4 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-80 border border-base-300/50"
        >
          <div className="mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Moon className="w-5 h-5" />
              Dark Themes
            </h3>
            <p className="text-sm text-base-content/60">
              Choose your perfect dark mode
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => setCurrentTheme(theme.name)}
                className={`group p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  currentTheme === theme.name
                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/25"
                    : "border-base-300/50 hover:border-primary/50 bg-base-200/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full ${theme.preview} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  ></div>
                  <div className="text-left">
                    <div className="text-sm font-medium">{theme.label}</div>
                    {currentTheme === theme.name && (
                      <div className="text-xs text-primary">Active</div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
