import React, { useState, useEffect, useRef } from "react";
import { Plus, Edit3, X } from "lucide-react";

const TaskForm = ({ editingTask, addTask, updateTask, closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "minor",
    dueDate: "",
    progress: 0,
  });

  const modalRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      setFormData({ ...editingTask });
    } else {
      setFormData({
        title: "",
        description: "",
        category: "minor",
        dueDate: "",
        progress: 0,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProgressChange = (e) => {
    setFormData((prev) => ({ ...prev, progress: Number(e.target.value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.dueDate) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingTask) {
      updateTask(editingTask.id, formData);
    } else {
      addTask(formData);
    }

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-base-100/70  pt-[6rem] px-4 sm:px-6">
      <div
        ref={modalRef}
        className="w-full max-w-3xl bg-base-100/95 border border-base-300/50 shadow-2xl rounded-xl p-6 sm:p-8 overflow-y-auto max-h-[calc(100vh-8rem)]"
      >
        {/* Header */}
        <header className="flex items-center justify-between mb-6 sticky top-0 bg-base-100/95 backdrop-blur-md z-20 py-4 border-b border-base-300/50">
          <h3 className="text-2xl sm:text-3xl  font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {editingTask ? "Edit Task" : "Create New Task"}
          </h3>
          <button
            type="button"
            aria-label="Close modal"
            className="btn btn-ghost btn-circle btn-sm hover:bg-error/20 transition-colors"
            onClick={closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="form-control w-full flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <label
              htmlFor="title"
              className="label w-full sm:w-1/4 cursor-pointer mb-1 sm:mb-0"
            >
              <span className="label-text font-semibold text-lg">
                Task Title
              </span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter a compelling task title..."
              className="input input-bordered input-lg w-full sm:w-3/4"
              value={formData.title}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          {/* Description */}
          <div className="form-control w-full flex flex-col sm:flex-row sm:items-start sm:gap-6">
            <label
              htmlFor="description"
              className="label w-full sm:w-1/4 cursor-pointer mb-1 sm:mb-0 pt-1"
            >
              <span className="label-text font-semibold text-lg">
                Description
              </span>
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your task in detail..."
              className="textarea textarea-bordered textarea-lg w-full sm:w-3/4 min-h-[120px]"
              value={formData.description}
              onChange={handleChange}
              required
              spellCheck="true"
            />
          </div>

          {/* Category & Due Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="form-control flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <label
                htmlFor="category"
                className="label w-full sm:w-1/3 cursor-pointer mb-1 sm:mb-0"
              >
                <span className="label-text font-semibold text-lg">
                  Priority Level
                </span>
              </label>
              <select
                id="category"
                name="category"
                className="select select-bordered select-lg w-full sm:w-2/3"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="minor">🔵 Minor - Low Priority</option>
                <option value="major">🟡 Major - Medium Priority</option>
                <option value="critical">🔴 Critical - High Priority</option>
              </select>
            </div>

            <div className="form-control flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <label
                htmlFor="dueDate"
                className="label w-full sm:w-1/3 cursor-pointer mb-1 sm:mb-0"
              >
                <span className="label-text font-semibold text-lg">
                  Due Date
                </span>
              </label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                className="input input-bordered input-lg w-full sm:w-2/3"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Progress Slider */}
          <div className="form-control w-full flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <label
              htmlFor="progress"
              className="label w-full sm:w-1/3 flex justify-between cursor-pointer mb-1 sm:mb-0"
            >
              <span className="label-text font-semibold text-lg">
                Initial Progress
              </span>
              <span className="label-text-alt font-mono">
                {formData.progress}%
              </span>
            </label>
            <div className="w-full sm:w-2/3">
              <input
                id="progress"
                name="progress"
                type="range"
                min="0"
                max="100"
                step="1"
                className="range range-primary w-full"
                value={formData.progress}
                onChange={handleProgressChange}
              />
              <div className="w-full flex justify-between text-xs px-2 mt-2 pointer-events-none select-none">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="modal-action justify-end gap-4 pt-4 border-t border-base-300/40 mt-4 flex flex-col sm:flex-row">
            <button
              type="button"
              className="btn btn-outline btn-lg hover:bg-error/10 hover:border-error hover:text-error w-full sm:w-auto"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              {editingTask ? (
                <>
                  <Edit3 className="w-5 h-5" />
                  Update Task
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Create Task
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
