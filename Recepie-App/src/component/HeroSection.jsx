import { Crown, Gem, Shield } from "lucide-react";
import React, { useState } from "react";

const HeroSection = () => {
  const [selectedPickupLine, setSelectedPickupLine] = useState(0);
  const pickupLines = [
    {
      urdu: "Mezbaan – Ahlan-o-Sahlan Zaykon Ki Duniya Mein.",
      english: "A heartfelt welcome to the world of flavors.",
    },
    {
      urdu: "Mezbaan – Jahan Zaike Se Dil Tak Ka Safar Mehsoos Hota Hai.",
      english: "Where taste takes you on a journey to the heart.",
    },
    {
      urdu: "Mezbaan – Swad Jo Mehmaan Banaye, Yaadein Jo Sadaa Reh Jaaye.",
      english:
        "Flavors that treat you like a guest, memories that stay forever.",
    },
    {
      urdu: "Mezbaan – Zayka, Mohabbat, Aur Mehmaan Nawazi Ek Saath.",
      english: "Flavor, love, and hospitality—all together.",
    },
    {
      urdu: "Mezbaan – Jahan Har Nuskha Mehfil Ban Jaaye.",
      english: "Where every recipe turns into a celebration.",
    },
    {
      urdu: "Mezbaan – Har Narm Lahja, Har Garam Nivala Yaadgar Banta Hai.",
      english: "Where every gentle word and warm bite becomes a memory.",
    },

    {
      urdu: "Mezbaan – Mehmaan Nawazi Ka Rang, Har Recipe Mein Dhalta Hai.",
      english: "The colors of hospitality are blended into every recipe.",
    },
    {
      urdu: "Mezbaan – Har Lutf Bhari Dish Ek Daawat Ka Paighaam.",
      english: "Every delightful dish is an invitation to a feast.",
    },
  ];

  return (
    <section
      className="relative py-10 md:py-32 overflow-hidden"
      id="heroSection"
    >
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30`}
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
