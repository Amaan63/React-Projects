import React, { useState, useEffect } from "react";
import {
  Search,
  Star,
  Clock,
  Users,
  ChefHat,
  Crown,
  Heart,
  Award,
  Sparkles,
  Menu,
  X,
  Gem,
  Shield,
  Zap,
  Tag, // Added Tag icon for categories
} from "lucide-react";

// Assuming your complete recipe data looks something like this:
const allRecipes = {
  recipes: [
    {
      id: 1,
      name: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian", "Vegetarian", "Main Course"],
      userId: 45,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 3,
      mealType: ["Dinner"],
    },
    {
      id: 2,
      name: "Chicken Stir-fry",
      ingredients: [
        "Chicken breast",
        "Broccoli",
        "Carrots",
        "Bell peppers",
        "Soy sauce",
        "Ginger",
        "Garlic",
        "Rice",
      ],
      instructions: [
        "Cut chicken and vegetables into bite-sized pieces.",
        "Heat oil in a wok or large skillet.",
        "Add chicken and cook until browned.",
        "Add vegetables, ginger, and garlic; stir-fry until tender-crisp.",
        "Stir in soy sauce and serve over rice.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      servings: 3,
      difficulty: "Medium",
      cuisine: "Asian",
      caloriesPerServing: 450,
      tags: ["Stir-fry", "Asian", "Chicken", "Main Course"],
      userId: 12,
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 4.7,
      reviewCount: 5,
      mealType: ["Dinner"],
    },
    {
      id: 3,
      name: "Chocolate Chip Cookies",
      ingredients: [
        "All-purpose flour",
        "Baking soda",
        "Salt",
        "Unsalted butter",
        "Granulated sugar",
        "Brown sugar",
        "Eggs",
        "Vanilla extract",
        "Chocolate chips",
      ],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Cream together butter, granulated sugar, and brown sugar.",
        "Beat in eggs one at a time, then vanilla.",
        "Combine flour, baking soda, and salt; gradually add to wet ingredients.",
        "Stir in chocolate chips. Drop by rounded spoonfuls onto baking sheets.",
        "Bake for 9-11 minutes or until edges are golden brown.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 10,
      servings: 24,
      difficulty: "Easy",
      cuisine: "American",
      caloriesPerServing: 150,
      tags: ["Cookies", "Dessert", "Baking"],
      userId: 7,
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      rating: 4.9,
      reviewCount: 10,
      mealType: ["Snack", "Dessert"],
    },
    {
      id: 4,
      name: "Spicy Beef Karahi",
      ingredients: [
        "Beef",
        "Tomatoes",
        "Green chilies",
        "Ginger-garlic paste",
        "Yogurt",
        "Coriander powder",
        "Cumin powder",
        "Red chili powder",
        "Garam masala",
        "Oil",
        "Fresh coriander",
      ],
      instructions: [
        "Heat oil in a karahi (wok). Add beef and cook until browned.",
        "Add ginger-garlic paste and cook for a few minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Stir in yogurt and all powdered spices.",
        "Add green chilies and cook until oil separates.",
        "Garnish with fresh coriander and serve hot with naan.",
      ],
      prepTimeMinutes: 25,
      cookTimeMinutes: 45,
      servings: 4,
      difficulty: "Medium",
      cuisine: "Pakistani",
      caloriesPerServing: 600,
      tags: ["Beef", "Pakistani", "Karahi", "Main Course"],
      userId: 21,
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      rating: 4.8,
      reviewCount: 8,
      mealType: ["Dinner", "Lunch"],
    },
    {
      id: 5,
      name: "Chicken Biryani",
      ingredients: [
        "Chicken",
        "Basmati rice",
        "Onions",
        "Tomatoes",
        "Yogurt",
        "Biryani masala",
        "Ginger-garlic paste",
        "Green chilies",
        "Mint leaves",
        "Coriander leaves",
        "Oil",
        "Saffron (optional)",
      ],
      instructions: [
        "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and green chilies.",
        "Fry onions until golden brown.",
        "Add marinated chicken and cook until tender.",
        "Boil basmati rice until 70% cooked.",
        "Layer rice and chicken mixture in a pot, adding mint, coriander, and saffron.",
        "Cook on low heat (dum) until rice is fully cooked.",
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 60,
      servings: 6,
      difficulty: "Hard",
      cuisine: "Indian",
      caloriesPerServing: 550,
      tags: ["Biryani", "Main Course", "Indian", "Pakistani", "Chicken"],
      userId: 3,
      image: "https://cdn.dummyjson.com/recipe-images/5.webp",
      rating: 4.9,
      reviewCount: 15,
      mealType: ["Dinner", "Lunch"],
    },
    // Add more recipes here following the same structure
    {
      id: 6,
      name: "Quinoa Salad",
      ingredients: [
        "Quinoa",
        "Cucumber",
        "Cherry tomatoes",
        "Red onion",
        "Feta cheese",
        "Lemon juice",
        "Olive oil",
        "Parsley",
      ],
      instructions: [
        "Cook quinoa according to package directions.",
        "Chop cucumber, tomatoes, and red onion.",
        "Combine cooked quinoa with chopped vegetables and feta cheese.",
        "Whisk together lemon juice, olive oil, salt, and pepper for dressing.",
        "Pour dressing over salad and toss to combine. Garnish with fresh parsley.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Mediterranean",
      caloriesPerServing: 280,
      tags: ["Salad", "Vegetarian", "Healthy", "Lunch"],
      userId: 18,
      image: "https://cdn.dummyjson.com/recipe-images/6.webp",
      rating: 4.5,
      reviewCount: 6,
      mealType: ["Lunch", "Snack"],
    },
    {
      id: 7,
      name: "Shrimp Scampi with Linguine",
      ingredients: [
        "Linguine pasta",
        "Shrimp",
        "Garlic",
        "Butter",
        "White wine (optional)",
        "Lemon juice",
        "Red pepper flakes",
        "Parsley",
      ],
      instructions: [
        "Cook linguine according to package directions.",
        "Melt butter in a skillet, add garlic and red pepper flakes.",
        "Add shrimp and cook until pink.",
        "Deglaze with white wine or chicken broth, then stir in lemon juice.",
        "Toss cooked linguine with shrimp mixture. Garnish with fresh parsley.",
      ],
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      servings: 2,
      difficulty: "Medium",
      cuisine: "Italian",
      caloriesPerServing: 500,
      tags: ["Pasta", "Seafood", "Italian", "Main Course"],
      userId: 25,
      image: "https://cdn.dummyjson.com/recipe-images/7.webp",
      rating: 4.7,
      reviewCount: 9,
      mealType: ["Dinner"],
    },
    {
      id: 8,
      name: "Classic Beef Lasagna",
      ingredients: [
        "Lasagna noodles",
        "Ground beef",
        "Marinara sauce",
        "Ricotta cheese",
        "Mozzarella cheese",
        "Parmesan cheese",
        "Egg",
        "Italian seasoning",
      ],
      instructions: [
        "Cook lasagna noodles according to package directions.",
        "Brown ground beef and drain fat. Stir in marinara sauce.",
        "In a bowl, mix ricotta cheese, egg, and Italian seasoning.",
        "Layer ingredients in a baking dish: sauce, noodles, ricotta mixture, mozzarella, and parmesan.",
        "Repeat layers and bake until bubbly and golden brown.",
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 45,
      servings: 8,
      difficulty: "Medium",
      cuisine: "Italian",
      caloriesPerServing: 480,
      tags: ["Pasta", "Beef", "Italian", "Main Course"],
      userId: 30,
      image: "https://cdn.dummyjson.com/recipe-images/8.webp",
      rating: 4.6,
      reviewCount: 12,
      mealType: ["Dinner"],
    },
    {
      id: 9,
      name: "Tandoori Chicken",
      ingredients: [
        "Chicken drumsticks/thighs",
        "Yogurt",
        "Ginger-garlic paste",
        "Tandoori masala",
        "Lemon juice",
        "Red chili powder",
        "Turmeric powder",
        "Oil",
      ],
      instructions: [
        "Make deep gashes on chicken pieces.",
        "Mix yogurt, ginger-garlic paste, tandoori masala, lemon juice, chili powder, and turmeric.",
        "Marinate chicken in the mixture for at least 4 hours, or overnight.",
        "Grill or bake chicken until fully cooked and slightly charred.",
        "Serve hot with mint chutney and onion rings.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: "Medium",
      cuisine: "Indian",
      caloriesPerServing: 350,
      tags: ["Chicken", "Indian", "Main Course", "Grilled"],
      userId: 5,
      image: "https://cdn.dummyjson.com/recipe-images/9.webp",
      rating: 4.8,
      reviewCount: 10,
      mealType: ["Dinner", "Lunch"],
    },
    {
      id: 10,
      name: "Gulab Jamun",
      ingredients: [
        "Khoya (reduced milk solids)",
        "All-purpose flour",
        "Baking soda",
        "Cardamom powder",
        "Sugar",
        "Water",
        "Rose water",
        "Oil for frying",
      ],
      instructions: [
        "Crumble khoya and mix with flour, baking soda, and cardamom powder to form a dough.",
        "Shape into small, smooth balls.",
        "Fry the balls in hot oil over medium-low heat until golden brown.",
        "Prepare sugar syrup by boiling sugar and water until slightly thick, add rose water.",
        "Soak the fried gulab jamuns in the warm sugar syrup for at least 30 minutes.",
        "Serve warm or chilled.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 20,
      servings: 12,
      difficulty: "Medium",
      cuisine: "Indian",
      caloriesPerServing: 220,
      tags: ["Dessert", "Indian", "Sweet"],
      userId: 15,
      image: "https://cdn.dummyjson.com/recipe-images/10.webp",
      rating: 4.7,
      reviewCount: 7,
      mealType: ["Dessert"],
    },
    // Adding more recipes for diverse categories and tags
    {
      id: 11,
      name: "Vegetable Pakora",
      ingredients: [
        "Chickpea flour",
        "Mixed vegetables (onions, potatoes, spinach)",
        "Spices (turmeric, chili powder, cumin)",
        "Water",
        "Oil for frying",
      ],
      instructions: [
        "Mix chickpea flour, spices, and water to make a thick batter.",
        "Add chopped vegetables to the batter.",
        "Heat oil in a pan and drop spoonfuls of the mixture.",
        "Fry until golden brown and crispy. Serve with chutney.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Indian",
      caloriesPerServing: "280",
      tags: ["Appetizer", "Vegetarian", "Indian", "Snack"],
      userId: 2,
      image: "https://cdn.dummyjson.com/recipe-images/11.webp",
      rating: 4.4,
      reviewCount: 5,
      mealType: ["Appetizer", "Snack"],
    },
    {
      id: 12,
      name: "Mutton Korma",
      ingredients: [
        "Mutton",
        "Yogurt",
        "Onions",
        "Ginger-garlic paste",
        "Korma masala",
        "Cream (optional)",
        "Oil",
      ],
      instructions: [
        "Brown sliced onions until crispy and crush them.",
        "Cook mutton with ginger-garlic paste until browned.",
        "Add yogurt, korma masala, and cook until tender.",
        "Stir in crushed onions and cream. Simmer until gravy thickens.",
        "Serve with naan or rice.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 60,
      servings: 5,
      difficulty: "Hard",
      cuisine: "Pakistani",
      caloriesPerServing: 650,
      tags: ["Mutton", "Pakistani", "Main Course"],
      userId: 10,
      image: "https://cdn.dummyjson.com/recipe-images/12.webp",
      rating: 4.8,
      reviewCount: 7,
      mealType: ["Dinner", "Lunch"],
    },
    {
      id: 13,
      name: "Lemonade",
      ingredients: ["Lemons", "Sugar", "Water", "Ice"],
      instructions: [
        "Squeeze fresh lemon juice.",
        "Prepare simple syrup by dissolving sugar in hot water.",
        "Combine lemon juice, simple syrup, and cold water.",
        "Add ice and garnish with lemon slices. Serve chilled.",
      ],
      prepTimeMinutes: 5,
      cookTimeMinutes: 5,
      servings: 4,
      difficulty: "Easy",
      cuisine: "American",
      caloriesPerServing: 120,
      tags: ["Beverage", "Drinks", "Refreshing"],
      userId: 33,
      image: "https://cdn.dummyjson.com/recipe-images/13.webp",
      rating: 4.2,
      reviewCount: 2,
      mealType: ["Beverage"],
    },
  ],
  total: 13, // Updated total for new recipes
  skip: 0,
  limit: 30,
};

// All unique tags to be used for categories
const allAvailableTags = [
  "Pizza",
  "Italian",
  "Vegetarian",
  "Stir-fry",
  "Asian",
  "Cookies",
  "Dessert",
  "Baking",
  "Pasta",
  "Chicken",
  "Salsa",
  "Salad",
  "Quinoa",
  "Bruschetta",
  "Beef",
  "Caprese",
  "Shrimp",
  "Biryani",
  "Main Course",
  "Indian",
  "Pakistani",
  "Karahi",
  "Keema",
  "Healthy",
  "Lunch",
  "Snack",
  "Seafood",
  "Grilled",
  "Sweet",
  "Appetizer",
  "Mutton",
  "Drinks",
  "Refreshing",
];

const App3 = () => {
  const [selectedPickupLine, setSelectedPickupLine] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const pickupLines = [
    {
      urdu: "Mezbaan – Har Zayka Mehmaan Nawazi Ka Paighaam.",
      english: "Every flavor carries a message of hospitality.",
    },
    {
      urdu: "Mezbaan – Jahan Har Recipe Mehmaan Ki Tarah Khush Aamdeed Kehte Hai.",
      english: "Where every recipe welcomes you like a guest.",
    },
    {
      urdu: "Mezbaan – Zayka, Mohabbat, Aur Mehmaan Nawazi Ek Saath.",
      english: "Flavor, love, and hospitality—all together.",
    },
    {
      urdu: "Mezbaan – Ahlan-o-Sahlan Zaykon Ki Duniya Mein.",
      english: "A heartfelt welcome to the world of flavors.",
    },
    {
      urdu: "Mezbaan – Jahan Har Nuskha Mehfil Ban Jaaye.",
      english: "Where every recipe turns into a celebration.",
    },
    {
      urdu: "Mezbaan – Swad Jo Mehmaan Banaye, Yaadein Jo Sadaa Reh Jaaye.",
      english:
        "Flavors that treat you like a guest, memories that stay forever.",
    },
  ];

  // Dynamically create categories from allAvailableTags
  const dynamicCategories = allAvailableTags.map((tag) => {
    // Count recipes for each tag
    const count = allRecipes.recipes.filter((recipe) =>
      recipe.tags.includes(tag)
    ).length;

    let icon = Tag; // Default icon
    if (tag.toLowerCase().includes("main course")) icon = ChefHat;
    else if (tag.toLowerCase().includes("dessert")) icon = Heart;
    else if (tag.toLowerCase().includes("appetizer")) icon = Star;
    else if (
      tag.toLowerCase().includes("beverage") ||
      tag.toLowerCase().includes("drinks")
    )
      icon = Award;
    else if (tag.toLowerCase().includes("biryani")) icon = Crown;
    else if (tag.toLowerCase().includes("chicken")) icon = Zap;
    else if (
      tag.toLowerCase().includes("beef") ||
      tag.toLowerCase().includes("mutton")
    )
      icon = Shield;
    else if (
      tag.toLowerCase().includes("pizza") ||
      tag.toLowerCase().includes("pasta")
    )
      icon = Gem;

    return { name: tag, icon: icon, count: count };
  });

  // Filter featured recipes for display (e.g., top 3 highest rated)
  const featuredRecipes = allRecipes.recipes
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3); // Display top 3 recipes as featured

  // Filter recipes based on search term
  const filteredRecipes = allRecipes.recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPickupLine((prev) => (prev + 1) % pickupLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-purple-900/95 via-violet-900/95 to-indigo-900/95 backdrop-blur-lg border-b-2 border-yellow-400/30 shadow-2xl">
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
                Mezmaan
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-100 hover:text-yellow-400 transition-all duration-300 font-semibold text-lg relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-yellow-400 transition-all duration-300 font-semibold text-lg relative group"
              >
                Recipes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-yellow-400 transition-all duration-300 font-semibold text-lg relative group"
              >
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-yellow-400 transition-all duration-300 font-semibold text-lg relative group"
              >
                About
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
                  href="#"
                  className="text-gray-100 hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-lg"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-lg"
                >
                  Recipes
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-lg"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-lg"
                >
                  About
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Pickup Lines */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-purple-900/70 via-violet-900/60 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fbbf24" fill-opacity="0.08"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}
        ></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="flex justify-center items-center space-x-6 mb-8">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-2xl shadow-2xl border-2 border-gray-300">
                  <Gem className="h-14 w-14 text-yellow-400 animate-pulse" />
                </div>
                <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-6 rounded-3xl shadow-2xl border-4 border-gray-200">
                  <Crown className="h-20 w-20 text-purple-900" />
                </div>
                <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-2xl shadow-2xl border-2 border-gray-300">
                  <Shield className="h-14 w-14 text-purple-100 animate-pulse" />
                </div>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-2xl">
                Welcome to Royal Hospitality
              </h2>
            </div>

            {/* Rotating Pickup Lines */}
            <div className="bg-gradient-to-br from-purple-900/60 via-violet-900/60 to-indigo-900/60 backdrop-blur-xl rounded-3xl p-12 mb-16 border-2 border-yellow-400/40 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5"></div>
              <div className="relative min-h-[160px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 leading-relaxed">
                    {pickupLines[selectedPickupLine].urdu}
                  </p>
                  <p className="text-xl md:text-3xl bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent italic font-semibold">
                    {pickupLines[selectedPickupLine].english}
                  </p>
                </div>
              </div>

              {/* Pickup Line Indicators */}
              <div className="flex justify-center space-x-4 mt-10 relative">
                {pickupLines.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPickupLine(index)}
                    className={`w-5 h-5 rounded-full transition-all duration-300 ${
                      index === selectedPickupLine
                        ? "bg-gradient-to-r from-yellow-400 to-amber-400 scale-150 shadow-lg"
                        : "bg-gradient-to-r from-gray-400 to-gray-500 hover:from-yellow-500 hover:to-amber-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-amber-400 p-2 rounded-full">
                <Search className="h-6 w-6 text-purple-900" />
              </div>
              <input
                type="text"
                placeholder="Search for royal recipes..."
                className="w-full pl-20 pr-8 py-6 bg-gradient-to-r from-gray-100/20 to-gray-200/20 backdrop-blur-lg border-2 border-yellow-400/50 rounded-2xl text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 text-xl shadow-2xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gradient-to-br from-purple-900/80 via-violet-900/80 to-indigo-900/80 backdrop-blur-lg relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5"></div>
        <div className="container mx-auto px-4 relative">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-center mb-10">
            Royal Categories
          </h3>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-400/40 scrollbar-track-transparent">
            <div className="flex space-x-6 min-w-max px-1 pb-2">
              {dynamicCategories.map((category, index) => (
                <div
                  key={index}
                  className="min-w-[180px] bg-gradient-to-br from-purple-800/60 via-violet-800/60 to-indigo-800/60 backdrop-blur-xl rounded-2xl p-5 text-center hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-yellow-400/20 hover:border-yellow-400/60 shadow-xl group"
                >
                  <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-4 rounded-xl shadow-lg mx-auto w-fit mb-4 group-hover:scale-110 transition-all duration-300">
                    <category.icon className="h-10 w-10 text-purple-900" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-yellow-400 transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-gray-300 text-sm font-semibold">
                    {category.count} recipes
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Recipes Section (or Filtered Recipes) */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 to-indigo-950/60"></div>
        <div className="container mx-auto px-4 relative">
          <h3 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-center mb-20">
            {searchTerm ? "Search Results" : "All Royal Recipes"}
          </h3>
          {filteredRecipes.length === 0 && (
            <p className="text-center text-gray-300 text-2xl">
              No recipes found for "{searchTerm}".
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {(searchTerm ? filteredRecipes : allRecipes.recipes).map(
              (recipe) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-amber-400 backdrop-blur-sm rounded-full px-5 py-3 flex items-center space-x-2 shadow-xl">
                      <Star className="h-5 w-5 text-purple-900 fill-current" />
                      <span className="text-purple-900 font-bold text-lg">
                        {recipe.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-3xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors">
                      {recipe.name}
                    </h4>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      {recipe.instructions[0].substring(0, 100)}...{" "}
                      {/* Showing first instruction as description */}
                    </p>
                    <div className="flex justify-between items-center text-gray-300 text-lg mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-2 rounded-full">
                          <Clock className="h-5 w-5 text-purple-900" />
                        </div>
                        <span className="font-semibold">
                          {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-2 rounded-full">
                          <Users className="h-5 w-5 text-purple-900" />
                        </div>
                        <span className="font-semibold">
                          {recipe.servings} servings
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {recipe.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gradient-to-r from-purple-700 to-indigo-700 text-gray-100 px-4 py-2 rounded-full text-sm font-bold border border-yellow-400/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-center">
                      <button className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                        View Recipe
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-950/95 via-violet-950/95 to-indigo-950/95 backdrop-blur-lg border-t-2 border-yellow-400/40 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="flex items-center justify-center space-x-6 mb-10">
            <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-4 rounded-2xl shadow-2xl border-2 border-gray-300">
              <Crown className="h-12 w-12 text-purple-900" />
            </div>
            <h4 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Mezmaan
            </h4>
          </div>
          <p className="text-gray-300 mb-12 max-w-4xl mx-auto text-xl leading-relaxed">
            Where every recipe is a celebration of hospitality and flavor. Join
            our royal culinary journey and create memories that last forever.
          </p>
          <div className="flex justify-center space-x-10 text-gray-300 mb-12">
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors font-semibold text-lg"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors font-semibold text-lg"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
          <div className="pt-10 border-t border-yellow-400/30">
            <p className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent text-xl font-semibold">
              © 2025 Mezmaan. All rights reserved. Made with ❤️ for food lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App3;
