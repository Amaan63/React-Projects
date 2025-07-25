import React from "react";
import { Search, X } from "lucide-react";

const SearchSection = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <div className="form-control max-w-md">
        <div className="input-group relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50" />
          <input
            type="text"
            placeholder="Search tasks by title or description..."
            className="input input-bordered input-lg pl-12 pr-10 w-full focus:input-primary transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="btn btn-ghost btn-circle btn-sm absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchTerm("")}
              type="button"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
