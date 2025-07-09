import React from "react";

const CategoryFilter = ({
  categories,
  darkMode,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-lg transition-colors capitalize text-sm ${
            selectedCategory === category
              ? "bg-blue-500 text-white shadow-lg"
              : darkMode
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
