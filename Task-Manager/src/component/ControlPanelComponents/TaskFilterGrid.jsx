import React from "react";
import { TrendingUp, Clock, Check, Zap, Target, Tag } from "lucide-react";

const filterOptions = [
  {
    key: "all",
    label: "All",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "btn-neutral",
  },
  {
    key: "pending",
    label: "Pending",
    icon: <Clock className="w-4 h-4" />,
    color: "btn-warning",
  },
  {
    key: "completed",
    label: "Done",
    icon: <Check className="w-4 h-4" />,
    color: "btn-success",
  },
  {
    key: "critical",
    label: "Critical",
    icon: <Zap className="w-4 h-4" />,
    color: "btn-error",
  },
  {
    key: "major",
    label: "Major",
    icon: <Target className="w-4 h-4" />,
    color: "btn-warning",
  },
  {
    key: "minor",
    label: "Minor",
    icon: <Tag className="w-4 h-4" />,
    color: "btn-info",
  },
];

const TaskFilterGrid = ({ filter, setFilter, tasks }) => {
  const counts = {
    all: tasks.length,
    pending: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
    critical: tasks.filter((t) => t.category === "critical").length,
    major: tasks.filter((t) => t.category === "major").length,
    minor: tasks.filter((t) => t.category === "minor").length,
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 w-full">
      {filterOptions.map(({ key, label, icon, color }) => (
        <button
          key={key}
          className={`btn btn-sm gap-2 w-full transition-all duration-300 flex items-center justify-center ${
            filter === key
              ? `${color} shadow-lg scale-[1.03]`
              : "btn-outline hover:btn-primary hover:shadow-md"
          }`}
          onClick={() => setFilter(key)}
          type="button"
        >
          {icon}
          <span className="text-sm">{label}</span>
          <div className="badge badge-sm">{counts[key]}</div>
        </button>
      ))}
    </div>
  );
};

export default TaskFilterGrid;
