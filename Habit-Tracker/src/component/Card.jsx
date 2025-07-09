import React from "react";

const Card = ({ list }) => {
  if (!Array.isArray(list) || list.length === 0) {
    return (
      <p className="text-red-500 text-2xl text-center">No habits added yet.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((habit, index) => (
        <div
          key={index}
          className="rounded-xl p-4 text-white shadow-lg"
          style={{ backgroundColor: habit.colorTag }}
        >
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span>{habit.emoji}</span> {habit.habitName}
          </h3>
          <p className="text-sm">📅 Start: {habit.startDate}</p>
          <p className="text-sm">🔁 Frequency: {habit.frequency}</p>
          <p className="text-sm">⏳ Duration: {habit.duration} days</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
