import { useEffect, useState } from "react";
import Calendar from "../component/Calendar";
import Card from "../component/Card";
import Header from "../component/Header";

const Home = () => {
  const [habbitList, setHabbitList] = useState([]);

  const getHabbitList = () => {
    const stored = JSON.parse(localStorage.getItem("habbitList") || "[]");
    setHabbitList(stored);
  };

  useEffect(() => {
    getHabbitList();
  }, []);

  return (
    <div className="p-4 md:p-6 min-h-screen bg-base-200">
      <Header />

      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row gap-6">
        {/* Calendar Section */}
        <div className="w-full md:w-1/2 bg-base-100 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            📅 Your Calendar
          </h2>
          {/* <HabitCalendar /> */}
          <Calendar habits={habbitList} />
        </div>

        {/* Habit Cards Section */}
        <div className="w-full md:w-1/2 bg-base-100 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            ✅ Your Habits
          </h2>
          <Card list={habbitList} />
        </div>
      </div>
    </div>
  );
};

export default Home;
