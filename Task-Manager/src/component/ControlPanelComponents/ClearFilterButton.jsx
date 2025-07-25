import React from "react";
import { X } from "lucide-react";

const ClearFilterButton = ({ filter, setFilter, setSearchTerm }) => {
  if (filter === "all" && !setSearchTerm) return null; // hide if no filters

  return (
    <div className="mb-4 flex justify-end">
      <button
        className="btn btn-ghost btn-xs gap-1 text-base-content/60 hover:text-base-content"
        onClick={() => {
          setFilter("all");
          setSearchTerm("");
        }}
      >
        <X className="w-3 h-3" />
        Clear Filters
      </button>
    </div>
  );
};

export default ClearFilterButton;
