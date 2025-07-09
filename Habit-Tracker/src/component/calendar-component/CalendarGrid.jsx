import React from "react";

const CalendarGrid = ({
  generateCalendarDays,
  getHabitsForDate,
  isSelected,
  isCurrentMonth,
  isToday,
  setSelectedDate,
}) => {
  const days = generateCalendarDays();
  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((date, index) => {
        const dayHabits = getHabitsForDate(date);

        const baseStyles =
          "min-h-16 p-2 rounded-xl cursor-pointer transition-colors";
        const selectedStyles = isSelected(date)
          ? "bg-primary/20 border border-primary"
          : "hover:bg-base-300";
        const todayStyles = isToday(date) ? "ring-2 ring-primary" : "";
        const fadedStyles = !isCurrentMonth(date) ? "opacity-40" : "";

        return (
          <div
            key={index}
            onClick={() => setSelectedDate(date)}
            className={`${baseStyles} ${selectedStyles} ${todayStyles} ${fadedStyles}`}
          >
            <div className="text-sm font-semibold text-base-content text-center">
              {date.getDate()}
            </div>

            {/* Habit Emojis */}
            {dayHabits.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {dayHabits.map((habit, habitIndex) => (
                  <span key={habitIndex} title={habit.name} className="text-xs">
                    {habit.emoji}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;
