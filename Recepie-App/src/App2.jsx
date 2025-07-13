import React, { useState } from "react";
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
} from "lucide-react";

const App2 = () => {
  const [selectedPickupLine, setSelectedPickupLine] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const featuredRecipes = [
    {
      id: 1,
      title: "Royal Biryani",
      description: "A majestic blend of aromatic basmati rice and tender meat",
      image:
        "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "45 min",
      servings: "6-8",
      difficulty: "Medium",
      rating: 4.9,
      category: "Main Course",
    },
    {
      id: 2,
      title: "Shahi Korma",
      description: "Creamy royal curry fit for emperors",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      time: "30 min",
      servings: "4-6",
      difficulty: "Easy",
      rating: 4.8,
      category: "Main Course",
    },
    {
      id: 3,
      title: "Kulfi Malai",
      description: "Traditional royal frozen dessert",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      time: "20 min",
      servings: "8",
      difficulty: "Easy",
      rating: 4.7,
      category: "Dessert",
    },
  ];

  const categories = [
    { name: "Main Course", icon: ChefHat, count: 150 },
    { name: "Desserts", icon: Heart, count: 80 },
    { name: "Appetizers", icon: Star, count: 60 },
    { name: "Beverages", icon: Award, count: 40 },
  ];

  React.useEffect(() => {
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/80 via-violet-900/80 to-indigo-900/80 backdrop-blur-lg relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5"></div>
        <div className="container mx-auto px-4 relative">
          <h3 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-center mb-20">
            Royal Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-800/60 via-violet-800/60 to-indigo-800/60 backdrop-blur-xl rounded-3xl p-10 text-center hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-yellow-400/30 hover:border-yellow-400/70 shadow-2xl group"
              >
                <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-6 rounded-2xl shadow-xl mx-auto w-fit mb-8 group-hover:scale-110 transition-all duration-300">
                  <category.icon className="h-14 w-14 text-purple-900" />
                </div>
                <h4 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors">
                  {category.name}
                </h4>
                <p className="text-gray-300 text-lg font-semibold">
                  {category.count} recipes
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 to-indigo-950/60"></div>
        <div className="container mx-auto px-4 relative">
          <h3 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-center mb-20">
            Royal Featured Recipes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-gradient-to-br from-purple-800/50 via-violet-800/50 to-indigo-800/50 backdrop-blur-xl rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-yellow-400/30 hover:border-yellow-400/70 shadow-2xl group"
              >
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
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
                    {recipe.title}
                  </h4>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {recipe.description}
                  </p>
                  <div className="flex justify-between items-center text-gray-300 text-lg mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-purple-900" />
                      </div>
                      <span className="font-semibold">{recipe.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-2 rounded-full">
                        <Users className="h-5 w-5 text-purple-900" />
                      </div>
                      <span className="font-semibold">{recipe.servings}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-gray-100 px-5 py-3 rounded-full text-sm font-bold border border-yellow-400/30">
                      {recipe.category}
                    </span>
                    <button className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

export default App2;
