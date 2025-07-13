import { Clock, Search, Star, Users } from "lucide-react";
import React, { useState } from "react";
import RecepieModal from "./RecepieModal";

const FeaturedReceipe = ({
  featuredRecipes,
  fetchRecipesByTag,
  fetchFeaturedRecepies,
  setSelectedCategory,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  if (!featuredRecipes || !featuredRecipes.recipes) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        <h1 className="text-2xl text-red-500 font-bold">Recipes Not Found</h1>
      </div>
    );
  }

  const filteredRecipes = featuredRecipes.recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Optional tags for demo
  const demoTags = ["Indian", "Pakistani", "Italian", "Asian", "Korean"];

  return (
    <>
      <section className="pt-27 pb-0 relative overflow-hidden" id="recepies">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 to-indigo-950/60"></div>

        <div className="container mx-auto px-4 relative">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-center mb-12">
            Royal Featured Recipes
          </h3>

          {/* Search Bar */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-4">
            <div className="flex items-center bg-gradient-to-r from-gray-100/20 to-gray-200/20 backdrop-blur-lg border-2 border-yellow-400/50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="pl-4 pr-2 flex items-center">
                <Search className="h-5 w-5 text-yellow-400" />
              </div>

              <input
                type="text"
                placeholder="Search for royal recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => {
                  setSelectedCategory(null); // reset selected category
                  fetchFeaturedRecepies(); // load default recipes
                }}
                className="flex-grow bg-transparent py-4 md:py-5 px-2 text-gray-100 placeholder-gray-300 focus:outline-none text-base md:text-xl"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-yellow-400 hover:text-red-400 px-4 py-2 transition-colors font-medium"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Tag Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            {demoTags.map((tag) => (
              <button
                key={tag}
                onClick={() => fetchRecipesByTag(tag)}
                className="bg-gradient-to-r from-yellow-400 to-amber-400 text-purple-900 px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-200 shadow-md"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRecipes.length === 0 ? (
              <p className="text-center text-red-400 text-xl col-span-full font-semibold">
                No recipes found for "
                <span className="italic">{searchTerm}</span>"
              </p>
            ) : (
              filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-gradient-to-br from-purple-800/50 via-violet-800/50 to-indigo-800/50 backdrop-blur-xl rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-yellow-400/30 hover:border-yellow-400/70 shadow-2xl group"
                >
                  <div className="relative">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full px-5 py-3 flex items-center space-x-2 shadow-xl">
                      <Star className="h-5 w-5 text-purple-900" />
                      <span className="text-purple-900 font-bold text-lg">
                        {recipe.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors">
                      {recipe.name}
                    </h4>
                    <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed line-clamp-2">
                      {recipe.instructions[0]}
                    </p>

                    <div className="flex justify-between items-center text-gray-300 text-sm md:text-lg mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-yellow-400" />
                        <span>{recipe.cookTimeMinutes} min</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-yellow-400" />
                        <span>{recipe.servings} servings</span>
                      </div>
                    </div>

                    <button
                      className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-purple-900 px-6 py-3 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                      onClick={() => setSelectedRecipe(recipe)}
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedRecipe && (
        <RecepieModal
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}
    </>
  );
};

export default FeaturedReceipe;
