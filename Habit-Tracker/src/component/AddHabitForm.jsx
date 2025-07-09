import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddHabitForm = ({ onAdd }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    habitName: "",
    emoji: "",
    frequency: "",
    startDate: "",
    duration: "",
    colorTag: "#1db954",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      habitName: "",
      emoji: "",
      frequency: "",
      startDate: "",
      durationDays: "",
      colorTag: "#1db954",
    });
    navigate("/");
  };

  return (
    <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-content/10">
      <div className="card-body">
        <h2 className="card-title justify-center text-primary">
          Add a New Habit
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Habit Name */}
          <div>
            <label className="label">
              <span className="label-text">Habit Name</span>
            </label>
            <input
              type="text"
              name="habitName"
              placeholder="e.g. Drink Water"
              className="input input-bordered w-full"
              value={formData.habitName}
              onChange={handleOnChange}
            />
          </div>

          {/* Emoji Icon */}
          <div>
            <label className="label">
              <span className="label-text">Emoji Icon</span>
            </label>
            <input
              type="text"
              name="emoji"
              placeholder="e.g. 🚰"
              maxLength={2}
              className="input input-bordered w-full"
              value={formData.emoji}
              onChange={handleOnChange}
            />
          </div>

          {/* Frequency */}
          <div>
            <label className="label">
              <span className="label-text">Frequency</span>
            </label>
            <select
              name="frequency"
              value={formData.frequency}
              className="select select-bordered w-full"
              onChange={handleOnChange}
            >
              <option value="">Select Frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label className="label">
              <span className="label-text">Start Date</span>
            </label>
            <input
              type="date"
              name="startDate"
              className="input input-bordered w-full"
              value={formData.startDate}
              onChange={handleOnChange}
            />
          </div>

          {/* Duration (Number of Days) */}
          <div>
            <label className="label">
              <span className="label-text">Duration (in Days)</span>
            </label>
            <input
              type="number"
              name="duration"
              min="1"
              max="365"
              value={formData.duration}
              onChange={handleOnChange}
              placeholder="e.g. 21"
              className="input input-bordered w-full"
            />
          </div>

          {/* Color Tag */}
          <div>
            <label className="label">
              <span className="label-text">Habit Color Tag</span>
            </label>
            <div className="flex items-center gap-4">
              <input
                type="color"
                name="colorTag"
                className="input w-16 h-10 p-1 rounded border border-base-content/20"
                value={formData.colorTag}
                onChange={handleOnChange}
              />
              <span className="text-sm text-base-content/50">Pick a color</span>
            </div>
          </div>

          {/* Add Button */}
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary w-full">
              Add Habit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabitForm;
