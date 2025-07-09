import AddHabitForm from "../component/AddHabitForm";
import Header from "../component/Header";

const AddHabbit = () => {
  const storeHabit = (habbitData) => {
    const existingHabits = JSON.parse(
      localStorage.getItem("habbitList") || "[]"
    );

    // Add the new habit to the existing list
    const updatedHabits = [...existingHabits, habbitData];

    // Save back to localStorage
    localStorage.setItem("habbitList", JSON.stringify(updatedHabits));
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-6">
      <Header />
      <div className="flex flex-col items-center justify-start pt-5 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          📌 Create Your New Habit
        </h1>
        <AddHabitForm onAdd={storeHabit} />
      </div>
    </div>
  );
};

export default AddHabbit;
