import React from "react";

const SelectedDateInfo = ({ selectedDate, getHabitsForDate }) => {
  return (
    <div className="mt-6 p-4 rounded-xl bg-base-200 shadow">
      <h4 className="font-semibold text-base-content mb-3 text-lg">
        {selectedDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h4>

      {getHabitsForDate(selectedDate).length > 0 ? (
        <div className="space-y-3">
          {getHabitsForDate(selectedDate).map((habit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-base-100 text-base-content rounded-xl border border-base-300 shadow-sm"
            >
              <span className="text-xl">{habit.emoji}</span>
              <span className="font-semibold">{habit.habitName}</span>
              <div
                className="w-3 h-3 rounded-full ml-auto"
                style={{ backgroundColor: habit.color }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-base-content/60">
          No habits scheduled for this day
        </p>
      )}
    </div>
  );
};

export default SelectedDateInfo;
