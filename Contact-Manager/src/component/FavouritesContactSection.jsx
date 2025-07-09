import React from "react";
import ContactCard from "./ContactCard";

const FavouritesContactSection = ({
  favoriteContacts,
  darkMode,
  toggleFavorite,
  handleEdit,
  handleDelete,
}) => {
  return (
    favoriteContacts.length > 0 && (
      <div className="mb-10 px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-xl sm:text-2xl font-semibold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Favorite Contacts
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              darkMode={darkMode}
              toggleFavorite={() => toggleFavorite(contact.id)}
              handleEdit={() => handleEdit(contact)}
              handleDelete={() => handleDelete(contact.id)}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default FavouritesContactSection;
