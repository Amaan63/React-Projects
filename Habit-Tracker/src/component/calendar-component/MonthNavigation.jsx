import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const MonthNavigation = ({
  monthNames,
  currentMonth,
  goToPreviousMonth,
  goToNextMonth,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={goToPreviousMonth}
        className="btn btn-sm btn-ghost rounded-full"
      >
        <FaArrowLeft />
      </button>

      <h3 className="text-lg font-semibold text-primary-content">
        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </h3>

      <button
        onClick={goToNextMonth}
        className="btn btn-sm btn-ghost rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default MonthNavigation;
