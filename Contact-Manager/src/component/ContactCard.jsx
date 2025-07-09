import { Edit2, Mail, MapPin, Phone, Star, Trash2 } from "lucide-react";

const ContactCard = ({
  darkMode,
  contact,
  toggleFavorite,
  handleDelete,
  handleEdit,
  index,
}) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900"
          />
          <div>
            <h3
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {contact.name}
            </h3>
            <span
              className={`text-sm px-2 py-1 rounded-full ${
                contact.category === "work"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              }`}
            >
              {contact.category}
            </span>
          </div>
        </div>

        <button
          onClick={() => toggleFavorite(index)}
          className={`self-start p-2 rounded-full transition-colors ${
            contact.favourite
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-gray-400 hover:text-yellow-500"
          }`}
        >
          <Star
            className={`w-5 h-5 ${contact.favourite ? "fill-current" : ""}`}
          />
        </button>
      </div>

      {/* Info Section */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-3">
          <Mail
            className={`w-4 h-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <span
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {contact.email}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone
            className={`w-4 h-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <span
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {contact.contactNumber}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin
            className={`w-4 h-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <span
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {contact.address}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => handleEdit(contact, index)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Edit2 className="w-4 h-4" />
          <span>Edit</span>
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
