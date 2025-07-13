import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import CategoriesSection from "./component/CategoriesSection";
import FeaturedReceipe from "./component/FeaturedReceipe";
import Footer from "./component/Footer";
import axios from "axios";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState(null);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const url = `https://dummyjson.com/recipes/tags`;
      const response = await axios.get(url);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories(null);
    }
  };

  const fetchFeaturedRecipes = async () => {
    try {
      const url = `https://dummyjson.com/recipes`;
      const response = await axios.get(url);
      setFeaturedRecipes(response.data);
    } catch (error) {
      console.error("Error fetching featured recipes:", error);
      setFeaturedRecipes([]);
    }
  };

  const fetchRecipesByTag = async (tag) => {
    try {
      const url = `https://dummyjson.com/recipes/tag/${encodeURIComponent(
        tag
      )}`;
      const response = await axios.get(url);
      setFeaturedRecipes(response.data); // overwrite current featured recipes
      setSelectedCategory(tag);
    } catch (error) {
      console.error(`Error fetching recipes for tag "${tag}":`, error);
      setFeaturedRecipes({ recipes: [] });
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchFeaturedRecipes();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950">
      {/* Sticky Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* All main content */}
      <main className="flex-grow">
        <HeroSection />

        <CategoriesSection
          categories={categories}
          fetchRecipesByTag={fetchRecipesByTag}
          selectedCategory={selectedCategory}
        />

        <FeaturedReceipe
          featuredRecipes={featuredRecipes}
          fetchRecipesByTag={fetchRecipesByTag}
          fetchFeaturedRecepies={fetchFeaturedRecipes}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </main>

      {/* Footer always sticks at bottom */}
      <Footer />
    </div>
  );
};

export default App;
