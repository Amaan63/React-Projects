import React from "react";
import ContactCard from "./ContactCard";
import { User } from "lucide-react";

const AllContact = ({
  filteredContacts,
  darkMode,
  searchTerm,
  toggleFavorite,
  handleEdit,
  handleDelete,
}) => {
  if (searchTerm) return null;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2
        className={`text-lg sm:text-xl font-semibold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        All Contacts
      </h2>

      {filteredContacts.length === 0 ? (
        <div
          className={`text-center py-12 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No contacts available.</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredContacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              index={index}
              darkMode={darkMode}
              toggleFavorite={toggleFavorite}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllContact;
