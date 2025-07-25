import React from "react";
import { Filter, Plus } from "lucide-react";

const ControlPanelHeader = ({ setIsModalOpen }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-base-content/60" />
        <h3 className="text-lg font-semibold">Task Controls</h3>
      </div>
      <button
        className="btn btn-primary btn-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-secondary border-none relative"
        onClick={() => setIsModalOpen()}
      >
        <Plus className="w-5 h-5" />
        Create New Task
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
      </button>
    </div>
  );
};

export default ControlPanelHeader;
