import { Search } from "lucide-react";
import React from "react";

const SearchBar = ({ darkMode, setSearchTerm, searchTerm }) => {
  return (
    <div className="relative w-full sm:max-w-md">
      <Search
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      />
      <input
        type="text"
        name="searchBar"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full pl-10 pr-4 py-3 rounded-lg border text-sm ${
          darkMode
            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
        } focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm`}
      />
    </div>
  );
};

export default SearchBar;
