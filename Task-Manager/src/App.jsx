import React, { useState, useEffect, useMemo } from "react";
import Header from "./component/Header";
import ControlPanel from "./component/ControlPanel";
import TaskCard from "./component/TaskCard";
import TaskForm from "./component/TaskForm";
import StatsCard from "./component/StatsCard";
import ProgressOverview from "./component/ProgressOverview";
import { Plus, Search } from "lucide-react";

const LOCAL_STORAGE_KEY = "tasks";

const App = () => {
  // Initialize tasks from localStorage (Lazy Initialization)
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return [];
    }
  });

  const [currentTheme, setCurrentTheme] = useState("dark");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // added filter state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Add new task
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString().split("T")[0],
      ...taskData,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Update existing task
  const updateTask = (id, updatedData) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedData } : task))
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              progress: !task.completed ? 100 : task.progress, // complete => 100%
            }
          : task
      )
    );
  };

  // Open modal with optional editing task
  const openModal = (task = null) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  // Filter and search tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      let matchFilter = true;
      if (filter === "completed") matchFilter = task.completed === true;
      else if (filter === "pending") matchFilter = task.completed === false;
      else if (
        filter === "critical" ||
        filter === "major" ||
        filter === "minor"
      ) {
        matchFilter = task.category === filter;
      }

      const matchSearch =
        searchTerm.trim() === "" ||
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchFilter && matchSearch;
    });
  }, [tasks, filter, searchTerm]);

  // Compute statistics
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const critical = tasks.filter(
      (t) => t.category === "critical" && !t.completed
    ).length;
    const avgProgress =
      tasks.length === 0
        ? 0
        : tasks.reduce((sum, t) => sum + (t.progress || 0), 0) / tasks.length;

    return { total, completed, pending, critical, avgProgress };
  }, [tasks]);

  // Sort tasks: incomplete first, then by priority
  const getPriorityOrder = (category) => {
    const order = { critical: 3, major: 2, minor: 1 };
    return order[category] || 0;
  };

  const sortedTasks = useMemo(() => {
    return [...filteredTasks].sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return getPriorityOrder(b.category) - getPriorityOrder(a.category);
    });
  }, [filteredTasks]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
      console.log("Tasks saved to localStorage:", tasks);
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }, [tasks]);

  return (
    <div
      data-theme={currentTheme}
      className="min-h-screen bg-gradient-to-br from-base-200 via-base-300 to-base-200"
    >
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Header */}
      <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

      {/* Main container */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* StatsCard - pass stats */}
        <StatsCard stats={stats} />

        {/* ProgressOverview */}
        <ProgressOverview avgProgress={stats.avgProgress} />

        {/* ControlPanel for search/filter/add task */}
        <ControlPanel
          setIsModalOpen={openModal}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
          tasks={tasks}
          filteredTasks={filteredTasks}
        />

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                handleEdit={() => openModal(task)}
                handleDelete={deleteTask}
              />
            ))
          ) : (
            <div className="col-span-full text-center">
              <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl border border-base-300/50 p-12">
                <div className="card-body flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 bg-base-300/50 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-base-content/30" />
                  </div>
                  <h2 className="text-2xl font-bold">No tasks found</h2>
                  <p className="text-base-content/60 max-w-md mx-auto">
                    {searchTerm
                      ? "No tasks match your search criteria."
                      : "No tasks match your current filter."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                    <button
                      className="btn btn-primary gap-2"
                      onClick={() => openModal()}
                    >
                      <Plus className="w-4 h-4" />
                      Create Your First Task
                    </button>
                    {(searchTerm || filter !== "all") && (
                      <button
                        className="btn btn-outline"
                        onClick={() => {
                          setSearchTerm("");
                          setFilter("all");
                        }}
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Form for Create/Edit */}
        {isModalOpen && (
          <TaskForm
            editingTask={editingTask}
            addTask={addTask}
            updateTask={updateTask}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default App;
