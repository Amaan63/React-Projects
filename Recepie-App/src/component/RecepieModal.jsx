import { X } from "lucide-react";
import React from "react";
import styles from "../style/ScrollBar.module.css";

const RecepieModal = ({ selectedRecipe, setSelectedRecipe }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className={`relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border-2 border-yellow-400/40 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 p-6 sm:p-8 text-gray-100 ${styles.customScrollbar}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-yellow-400 hover:text-white"
          onClick={() => setSelectedRecipe(null)}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 pr-10">
          {selectedRecipe.name}
        </h2>

        {/* Image */}
        <img
          src={selectedRecipe.image}
          alt={selectedRecipe.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        {/* Info Section */}
        <div className="mb-4 text-base sm:text-lg">
          <p>
            <strong>Difficulty:</strong> {selectedRecipe.difficulty}
          </p>
          <p>
            <strong>Prep Time:</strong> {selectedRecipe.prepTimeMinutes} min
          </p>
          <p>
            <strong>Cook Time:</strong> {selectedRecipe.cookTimeMinutes} min
          </p>
          <p>
            <strong>Servings:</strong> {selectedRecipe.servings}
          </p>
          <p>
            <strong>Calories/Serving:</strong>{" "}
            {selectedRecipe.caloriesPerServing}
          </p>
        </div>

        {/* Ingredients */}
        <h3 className="text-2xl text-yellow-300 font-semibold mb-2">
          Ingredients
        </h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          {selectedRecipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Instructions */}
        <h3 className="text-2xl text-yellow-300 font-semibold mb-2">
          Instructions
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          {selectedRecipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecepieModal;
