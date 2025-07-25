import React from "react";
import ControlPanelHeader from "./ControlPanelComponents/ControlPanelHeader";
import SearchSection from "./ControlPanelComponents/SearchSection";
import ClearFilterButton from "./ControlPanelComponents/ClearFilterButton";
import TaskFilterGrid from "./ControlPanelComponents/TaskFilterGrid";

const ControlPanel = ({
  setIsModalOpen,
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  tasks,
  filteredTasks,
}) => {
  return (
    <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl mb-8 border border-base-300/50">
      <div className="card-body p-4 sm:p-6">
        <ControlPanelHeader setIsModalOpen={setIsModalOpen} />

        <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div>
          <ClearFilterButton
            filter={filter}
            setFilter={setFilter}
            setSearchTerm={setSearchTerm}
          />

          <TaskFilterGrid filter={filter} setFilter={setFilter} tasks={tasks} />
        </div>

        {(searchTerm || filter !== "all") && (
          <div className="mt-6 p-4 bg-gradient-to-r from-base-200/50 to-base-300/30 rounded-lg border border-base-300/30">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">
                  {filteredTasks.length === 0 ? (
                    <span className="text-error">
                      No tasks match your filters
                    </span>
                  ) : (
                    <span className="text-success">
                      Found {filteredTasks.length} of {tasks.length} tasks
                    </span>
                  )}
                  {searchTerm && (
                    <span className="text-base-content/70">
                      {" "}
                      matching "{searchTerm}"
                    </span>
                  )}
                </p>
              </div>

              {filteredTasks.length > 0 && (
                <div className="flex items-center gap-2 text-xs text-base-content/60">
                  {/* Calendar icon from lucide-react */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    {filteredTasks.filter((t) => !t.completed).length} pending
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
