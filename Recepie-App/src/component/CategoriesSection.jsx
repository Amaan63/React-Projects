import { Award, ChefHat, Heart, Star } from "lucide-react";
import React from "react";
import styles from "../style/ScrollBar.module.css";

const iconOptions = [ChefHat, Heart, Star, Award];

const CategoriesSection = ({
  categories,
  fetchRecipesByTag,
  selectedCategory,
}) => {
  if (!categories || categories.length === 0) return null;

  return (
    <section
      className="py-12 bg-gradient-to-br from-purple-900/80 via-violet-900/80 to-indigo-900/80 backdrop-blur-lg relative pt-27"
      id="category"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5"></div>
      <div className="container mx-auto px-4 relative">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-center mb-10">
          Royal Categories
        </h3>
        <div className={`overflow-x-auto ${styles.customScrollbar} `}>
          <div className="flex space-x-6 min-w-max px-1 pb-2 justify-start">
            {categories.map((cat, index) => {
              const Icon = iconOptions[index % iconOptions.length];
              const isActive = selectedCategory === cat;

              return (
                <div
                  key={index}
                  onClick={() => fetchRecipesByTag(cat)}
                  className={`min-w-[130px] cursor-pointer p-5 text-center rounded-2xl transition-all duration-500 shadow-xl group
                    ${
                      isActive
                        ? "bg-yellow-400 text-purple-900 border-yellow-300 border-2"
                        : "bg-gradient-to-br from-purple-800/60 via-violet-800/60 to-indigo-800/60 text-gray-100 border-yellow-400/20"
                    }
                    hover:border-yellow-400/60 backdrop-blur-xl
                  `}
                >
                  <div
                    className={`p-4 rounded-xl shadow-lg mx-auto w-fit mb-4 group-hover:scale-110 transition-all duration-300
                      ${
                        isActive
                          ? "bg-purple-900 text-yellow-400"
                          : "bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 text-purple-900"
                      }
                    `}
                  >
                    <Icon className="h-10 w-10" />
                  </div>
                  <h4
                    className={`text-lg font-bold mb-2 transition-colors ${
                      isActive
                        ? "text-purple-900"
                        : "group-hover:text-yellow-400"
                    }`}
                  >
                    {cat}
                  </h4>
                  <p
                    className={`text-sm font-semibold ${
                      isActive ? "text-purple-900" : "text-gray-300"
                    }`}
                  >
                    Explore Now
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
