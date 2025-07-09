import React, { useEffect, useState } from "react";
import Header from "./section/Header";
import ContactDashboard from "./section/ContactDashboard";
import Modal from "./section/Modal";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Initialize contactList from localStorage
  const [contactList, setContactList] = useState(() => {
    try {
      const storedList = localStorage.getItem("contactList");
      return storedList ? JSON.parse(storedList) : [];
    } catch (error) {
      console.error("Error reading contactList from localStorage:", error);
      return [];
    }
  });

  const [editingContact, setEditingContact] = useState(null);

  const handleAddNewContactModal = () => {
    setEditingContact(null);
    setShowModal(true);
  };

  const storeNewContact = (newContact) => {
    try {
      setContactList((prevList) => [...prevList, newContact]);
      alert("Contact Added Successfully");
    } catch (error) {
      console.error("Error in Saving Contact", error);
      alert("Error in Saving Contact");
    }
  };

  const toggleFavorite = (index) => {
    setContactList((prevList) =>
      prevList.map((contact, i) =>
        i === index ? { ...contact, favourite: !contact.favourite } : contact
      )
    );
  };

  const handleEdit = (contact, index) => {
    setEditingContact({ ...contact, index }); // Pass index for editing
    setShowModal(true);
  };

  const handleUpdate = (updatedContact) => {
    if (typeof updatedContact.index !== "number") return;

    setContactList((prevList) =>
      prevList.map((contact, idx) =>
        idx === updatedContact.index
          ? { ...contact, ...updatedContact }
          : contact
      )
    );

    setShowModal(false);
    setEditingContact(null);
  };

  const handleDelete = (indexToDelete) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirmed) return;

    setContactList((prevList) =>
      prevList.filter((_, index) => index !== indexToDelete)
    );
  };

  // Keep localStorage in sync
  useEffect(() => {
    try {
      localStorage.setItem("contactList", JSON.stringify(contactList));
    } catch (error) {
      console.error("Error saving contactList to localStorage:", error);
    }
  }, [contactList]);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 overflow-hidden ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        AddNewContactModal={handleAddNewContactModal}
      />

      {/* Contact Dashboard */}
      <main className="w-full px-4 sm:px-6 lg:px-8 pb-8">
        <ContactDashboard
          darkMode={darkMode}
          allContact={contactList}
          toggleFavorite={toggleFavorite}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>

      {/* Modal */}
      {showModal && (
        <Modal
          darkMode={darkMode}
          editingContact={editingContact}
          setShowModal={setShowModal}
          AddNewContact={storeNewContact}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default App;
