import React from "react";
import { User } from "lucide-react";
import ContactCard from "./ContactCard"; // Ensure it's correctly imported

const SearchedContactSection = ({ searchTerm, searchedContacts, darkMode }) => {
  if (!searchTerm) return null;

  return (
    <div className="mb-10 px-4 sm:px-6 lg:px-8">
      <h2
        className={`text-xl sm:text-2xl font-semibold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Searched Contacts
      </h2>

      {searchedContacts.length === 0 ? (
        <div
          className={`text-center py-16 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-base sm:text-lg">
            No contacts found matching your search.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {searchedContacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchedContactSection;
