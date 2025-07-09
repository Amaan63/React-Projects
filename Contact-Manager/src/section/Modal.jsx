import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Modal = ({
  darkMode,
  editingContact,
  setShowModal,
  AddNewContact,
  handleUpdate,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    category: "personal",
    favourite: false,
    avatar: "https://avatar.iran.liara.run/public",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      handleUpdate({ ...formData, index: editingContact.index });
    } else {
      AddNewContact(formData);
    }
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      address: "",
      category: "personal",
      favourite: false,
      avatar: "https://avatar.iran.liara.run/public",
    });
    setShowModal(false);
  };

  useEffect(() => {
    if (editingContact) {
      setFormData(editingContact);
    }
  }, [editingContact]);

  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className={`w-full max-w-md sm:max-w-lg mx-auto rounded-2xl shadow-2xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <h2
            className={`text-lg sm:text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {editingContact ? "Edit Contact" : "Add New Contact"}
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X
              className={`w-5 h-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </button>
        </div>

        {/* Form */}
        <form className="p-4 sm:p-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Enter name"
              onChange={handleOnChange}
            />
          </div>

          {/* Email */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Enter email"
              onChange={handleOnChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Phone
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Enter phone number"
              onChange={handleOnChange}
            />
          </div>

          {/* Address */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Enter address"
              onChange={handleOnChange}
            />
          </div>

          {/* Category */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              onChange={handleOnChange}
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:space-x-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className={`w-full py-3 px-4 rounded-lg border ${
                darkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              } transition-colors`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              {editingContact ? "Update" : "Add"} Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
