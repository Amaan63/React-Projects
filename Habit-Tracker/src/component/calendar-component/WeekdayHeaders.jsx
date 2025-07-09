import React from "react";
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WeekdayHeaders = () => {
  return (
    <div className="grid grid-cols-7 gap-1 mb-2">
      {weekdays.map((day) => (
        <div
          key={day}
          className="text-center text-sm font-semibold text-base-content py-2"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekdayHeaders;
