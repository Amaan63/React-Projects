import { Star } from "lucide-react";
import React from "react";

const ContactStats = ({ favoriteContacts, filteredContacts, darkMode }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {filteredContacts.length} contacts found
      </p>
      {favoriteContacts.length > 0 && (
        <div className="flex items-center space-x-2">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {favoriteContacts.length} favorites
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactStats;
