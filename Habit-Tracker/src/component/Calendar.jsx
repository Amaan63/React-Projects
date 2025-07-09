import React, { useState } from "react";
import MonthNavigation from "./calendar-component/MonthNavigation";
import WeekdayHeaders from "./calendar-component/WeekdayHeaders";
import CalendarGrid from "./calendar-component/CalendarGrid";
import SelectedDateInfo from "./calendar-component/SelectedDateInfo";

// Optional fallback habits for testing
// const fallbackHabits = [
//   {
//     name: "Drink Water",
//     emoji: "🚰",
//     startDate: "2025-07-04",
//     duration: 3,
//     color: "#1db954",
//   },
//   {
//     name: "Meditate",
//     emoji: "🧘",
//     startDate: "2025-07-03",
//     duration: 2,
//     color: "#f43f5e",
//   },
// ];

const Calendar = ({ habits }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const habitList = habits && habits.length > 0 ? habits : [];

  // Helper function to get a date string in YYYY-MM-DD format
  // This handles timezone issues by ensuring we're always working with the intended date
  const getYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getHabitsForDate = (date) => {
    const dateStr = getYYYYMMDD(date); // Get the date string for the calendar day

    return habitList
      .filter((habit) => habit?.startDate && habit?.duration) // Filter out bad habits
      .filter((habit) => {
        // Parse startDate string as if it's already UTC to avoid local timezone offset issues
        const startParts = habit.startDate.split("-").map(Number);
        // Date.UTC(year, monthIndex, day)
        const start = new Date(
          Date.UTC(startParts[0], startParts[1] - 1, startParts[2])
        );

        const end = new Date(start);
        const duration = Math.max(1, Number(habit.duration));
        // Add duration days. Since 'end' is UTC, this will stay UTC.
        end.setUTCDate(start.getUTCDate() + duration - 1);

        const startStr = getYYYYMMDD(start); // Get the YYYY-MM-DD string
        const endStr = getYYYYMMDD(end); // Get the YYYY-MM-DD string

        // // 🧪 Safe debug log - you can remove this after confirming the fix
        // if (dateStr === "2025-07-04") {
        //   console.log("🧪 Checking:", {
        //     habit: habit ? habit.name : "undefined",
        //     startStr,
        //     endStr,
        //     currentDate: dateStr,
        //     condition: dateStr >= startStr && dateStr <= endStr,
        //   });
        // }

        return dateStr >= startStr && dateStr <= endStr;
      });
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <div className="max-w-md mx-auto bg-base-100 rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        📅 Habit Calendar
      </h2>

      {/* Month Navigation */}
      <MonthNavigation
        monthNames={monthNames}
        currentMonth={currentMonth}
        goToPreviousMonth={goToPreviousMonth}
        goToNextMonth={goToNextMonth}
      />

      {/* Weekday Headers */}
      <WeekdayHeaders />

      {/* Calendar Grid */}
      <CalendarGrid
        generateCalendarDays={generateCalendarDays}
        getHabitsForDate={getHabitsForDate}
        isSelected={isSelected}
        isCurrentMonth={isCurrentMonth}
        isToday={isToday}
        setSelectedDate={setSelectedDate}
      />

      {/* Selected Date Info */}
      <SelectedDateInfo
        selectedDate={selectedDate}
        getHabitsForDate={getHabitsForDate}
      />
    </div>
  );
};

export default Calendar;
