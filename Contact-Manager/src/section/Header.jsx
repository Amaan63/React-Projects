import { Moon, Plus, Sun, User } from "lucide-react";
import React from "react";

const Header = ({ darkMode, setDarkMode, AddNewContactModal }) => {
  return (
    <header
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b shadow-sm sticky top-0 z-40`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Title Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Manager
            </h1>
          </div>

          {/* Button Section */}
          <div className="flex items-center space-x-4 flex-wrap justify-center sm:justify-end">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Add Contact Button */}
            <button
              onClick={AddNewContactModal}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 
                shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5" />
              <span>Add Contact</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
