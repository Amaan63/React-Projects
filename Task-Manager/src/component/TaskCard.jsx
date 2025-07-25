import React from "react";
import {
  Edit3,
  Trash2,
  Check,
  Menu,
  Calendar,
  Zap,
  Target,
  Tag,
  Clock,
} from "lucide-react";

const categoryConfig = {
  critical: {
    color: "badge-error",
    icon: <Zap className="w-4 h-4" />,
  },
  major: {
    color: "badge-warning",
    icon: <Target className="w-4 h-4" />,
  },
  minor: {
    color: "badge-info",
    icon: <Tag className="w-4 h-4" />,
  },
};

const TaskCard = ({ task, toggleComplete, handleEdit, handleDelete }) => {
  const { id, title, description, category, completed, dueDate, progress } =
    task;

  return (
    <div
      className={`card bg-base-100/80 backdrop-blur-sm shadow-2xl border transition-all duration-300 hover:scale-105 hover:shadow-3xl ${
        completed
          ? "opacity-75 border-success/30"
          : `border-${categoryConfig[category].color.split("-")[1]}/30`
      }`}
    >
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`badge ${categoryConfig[category].color} gap-2 shadow-lg`}
              >
                {categoryConfig[category].icon}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
              {completed && (
                <div className="badge badge-success gap-2 shadow-lg">
                  <Check className="w-3 h-3" />
                  Done
                </div>
              )}
            </div>
            <h2
              className={`card-title text-lg mb-2 ${
                completed ? "line-through text-base-content/60" : ""
              }`}
            >
              {title}
            </h2>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
              <Menu className="w-4 h-4" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-40 border border-base-300"
            >
              <li>
                <a
                  onClick={() => toggleComplete(id)}
                  className="gap-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  {completed ? "Mark Pending" : "Complete"}
                </a>
              </li>
              <li>
                <a onClick={handleEdit} className="gap-2 cursor-pointer">
                  <Edit3 className="w-4 h-4" />
                  Edit
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleDelete(id)}
                  className="gap-2 text-error cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          className={`text-sm mb-4 ${
            completed ? "text-base-content/60" : "text-base-content/80"
          }`}
        >
          {description}
        </p>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-base-content/60">
              {progress || 0}%
            </span>
          </div>
          <progress
            className={`progress w-full h-2 ${
              progress >= 80
                ? "progress-success"
                : progress >= 50
                ? "progress-warning"
                : "progress-error"
            }`}
            value={progress || 0}
            max="100"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-base-content/60" />
            <span className="text-sm text-base-content/60">Due: {dueDate}</span>
          </div>
          {/* Could add due date status if desired */}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
