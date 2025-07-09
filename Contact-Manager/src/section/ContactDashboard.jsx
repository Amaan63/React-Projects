import CategoryFilter from "../component/CategoryFilter";
import ContactStats from "../component/ContactStats";
import FavouritesContactSection from "../component/FavouritesContactSection";
import AllContact from "../component/AllContact";
import SearchBar from "../component/SearchBar";
import SearchedContactSection from "../component/SearchedContactSection";
import { useState } from "react";

const ContactDashboard = ({
  darkMode,
  allContact,
  toggleFavorite,
  handleEdit,
  handleDelete,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "work", "personal"];

  const filteredContacts = allContact.filter((contact) => {
    const safeSearchTerm =
      typeof searchTerm === "string" ? searchTerm.toLowerCase() : "";

    const matchesSearch =
      (contact.name || "").toLowerCase().includes(safeSearchTerm) ||
      (contact.email || "").toLowerCase().includes(safeSearchTerm) ||
      (contact.contactNumber || "").toLowerCase().includes(safeSearchTerm) ||
      (contact.address || "").toLowerCase().includes(safeSearchTerm);

    const matchesCategory =
      selectedCategory === "all" || contact.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const searchedContacts = searchTerm
    ? allContact.filter((contact) => {
        const safeSearchTerm =
          typeof searchTerm === "string" ? searchTerm.toLowerCase() : "";

        return (
          (contact.name || "").toLowerCase().includes(safeSearchTerm) ||
          (contact.email || "").toLowerCase().includes(safeSearchTerm) ||
          (contact.contactNumber || "").toLowerCase().includes(safeSearchTerm)
        );
      })
    : [];

  const favoriteContacts = allContact
    .map((contact, index) => ({ ...contact, originalIndex: index }))
    .filter((contact) => contact.favourite);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Search and Filter */}
      <div className="mb-6 sm:mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <SearchBar darkMode={darkMode} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            darkMode={darkMode}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <ContactStats
            darkMode={darkMode}
            filteredContacts={filteredContacts}
            favoriteContacts={favoriteContacts}
          />
        </div>
      </div>

      {/* Search Results */}
      <SearchedContactSection
        darkMode={darkMode}
        searchTerm={searchTerm}
        searchedContacts={searchedContacts}
      />

      {/* Favorites Section */}
      <FavouritesContactSection
        darkMode={darkMode}
        favoriteContacts={favoriteContacts}
        toggleFavorite={toggleFavorite}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {/* All Contacts */}
      <AllContact
        darkMode={darkMode}
        filteredContacts={filteredContacts}
        searchTerm={searchTerm}
        toggleFavorite={toggleFavorite}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default ContactDashboard;
