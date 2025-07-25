import React, { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  Check,
  X,
  Calendar,
  Tag,
  AlertCircle,
  Zap,
  Target,
  Clock,
  TrendingUp,
  Star,
  Filter,
  Search,
  Menu,
  Settings,
  Bell,
  User,
  Palette,
  Moon,
} from "lucide-react";

const App3 = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project documentation",
      description:
        "Write comprehensive documentation for the new feature including API specs and user guides",
      category: "critical",
      completed: false,
      dueDate: "2025-07-20",
      createdAt: "2025-07-15",
      progress: 75,
    },
    {
      id: 2,
      title: "Review code changes",
      description:
        "Review pull requests from team members and provide constructive feedback",
      category: "major",
      completed: false,
      dueDate: "2025-07-18",
      createdAt: "2025-07-15",
      progress: 40,
    },
    {
      id: 3,
      title: "Update dependencies",
      description:
        "Update all npm packages to latest versions and test compatibility",
      category: "minor",
      completed: true,
      dueDate: "2025-07-16",
      createdAt: "2025-07-14",
      progress: 100,
    },
    {
      id: 4,
      title: "Team meeting preparation",
      description:
        "Prepare agenda and materials for weekly team meeting with stakeholders",
      category: "major",
      completed: false,
      dueDate: "2025-07-17",
      createdAt: "2025-07-15",
      progress: 60,
    },
    {
      id: 5,
      title: "Database optimization",
      description: "Optimize database queries and implement caching strategies",
      category: "critical",
      completed: false,
      dueDate: "2025-07-19",
      createdAt: "2025-07-15",
      progress: 30,
    },
    {
      id: 6,
      title: "UI/UX improvements",
      description: "Implement new design system and improve user experience",
      category: "major",
      completed: false,
      dueDate: "2025-07-25",
      createdAt: "2025-07-15",
      progress: 20,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Only dark themes
  const themes = [
    {
      name: "dark",
      label: "🌙 Dark",
      gradient: "from-gray-800 to-gray-900",
      preview: "bg-gray-800",
    },
    {
      name: "synthwave",
      label: "🌆 Synthwave",
      gradient: "from-purple-600 to-pink-600",
      preview: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    {
      name: "cyberpunk",
      label: "🤖 Cyberpunk",
      gradient: "from-yellow-400 to-red-600",
      preview: "bg-gradient-to-r from-yellow-400 to-red-600",
    },
    {
      name: "halloween",
      label: "🎃 Halloween",
      gradient: "from-orange-600 to-purple-600",
      preview: "bg-gradient-to-r from-orange-600 to-purple-600",
    },
    {
      name: "black",
      label: "🖤 Black",
      gradient: "from-black to-gray-800",
      preview: "bg-black",
    },
    {
      name: "dracula",
      label: "🧛 Dracula",
      gradient: "from-purple-800 to-red-900",
      preview: "bg-gradient-to-r from-purple-800 to-red-900",
    },
    {
      name: "night",
      label: "🌃 Night",
      gradient: "from-blue-900 to-purple-900",
      preview: "bg-gradient-to-r from-blue-900 to-purple-900",
    },
    {
      name: "coffee",
      label: "☕ Coffee",
      gradient: "from-amber-700 to-orange-800",
      preview: "bg-gradient-to-r from-amber-700 to-orange-800",
    },
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "minor",
    dueDate: "",
    progress: 0,
  });

  const categoryConfig = {
    critical: {
      color: "badge-error",
      icon: <Zap className="w-4 h-4" />,
      gradient: "from-red-500 to-red-700",
      glow: "shadow-red-500/50",
    },
    major: {
      color: "badge-warning",
      icon: <Target className="w-4 h-4" />,
      gradient: "from-yellow-500 to-orange-500",
      glow: "shadow-yellow-500/50",
    },
    minor: {
      color: "badge-info",
      icon: <Tag className="w-4 h-4" />,
      gradient: "from-blue-500 to-blue-700",
      glow: "shadow-blue-500/50",
    },
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.dueDate) {
      alert("Please fill in all fields");
      return;
    }

    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, ...formData } : task
        )
      );
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        ...formData,
        completed: false,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setTasks([...tasks, newTask]);
    }

    setFormData({
      title: "",
      description: "",
      category: "minor",
      dueDate: "",
      progress: 0,
    });
    setIsModalOpen(false);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description,
      category: task.category,
      dueDate: task.dueDate,
      progress: task.progress || 0,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              progress: task.completed ? task.progress || 0 : 100,
            }
          : task
      )
    );
  };

  const openModal = () => {
    setEditingTask(null);
    setFormData({
      title: "",
      description: "",
      category: "minor",
      dueDate: "",
      progress: 0,
    });
    setIsModalOpen(true);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed) ||
      task.category === filter;

    const matchesSearch =
      searchTerm === "" ||
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const critical = tasks.filter(
      (t) => t.category === "critical" && !t.completed
    ).length;
    const avgProgress =
      tasks.reduce((sum, task) => sum + (task.progress || 0), 0) / tasks.length;
    return { total, completed, pending, critical, avgProgress };
  };

  const stats = getTaskStats();

  const getPriorityOrder = (category) => {
    const order = { critical: 3, major: 2, minor: 1 };
    return order[category] || 0;
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    return getPriorityOrder(b.category) - getPriorityOrder(a.category);
  });

  const getProgressColor = (progress) => {
    if (progress >= 80) return "progress-success";
    if (progress >= 50) return "progress-warning";
    return "progress-error";
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div
      data-theme={currentTheme}
      className="min-h-screen bg-gradient-to-br from-base-200 via-base-300 to-base-200"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Cleaner Header */}
      <div className="navbar bg-base-100/80 backdrop-blur-xl shadow-2xl border-b border-base-300/50 sticky top-0 z-50">
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TaskFlow Pro
              </h1>
              <p className="text-xs text-base-content/60">
                Advanced Task Management
              </p>
            </div>
          </div>
        </div>

        <div className="flex-none">
          {/* Cool Theme Selector */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle relative group hover:bg-primary/20 transition-all duration-300"
            >
              <div className="relative">
                <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] mt-3 p-4 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-80 border border-base-300/50"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Moon className="w-5 h-5" />
                  Dark Themes
                </h3>
                <p className="text-sm text-base-content/60">
                  Choose your perfect dark mode
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setCurrentTheme(theme.name)}
                    className={`group p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      currentTheme === theme.name
                        ? "border-primary bg-primary/10 shadow-lg shadow-primary/25"
                        : "border-base-300/50 hover:border-primary/50 bg-base-200/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full ${theme.preview} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      ></div>
                      <div className="text-left">
                        <div className="text-sm font-medium">{theme.label}</div>
                        {currentTheme === theme.name && (
                          <div className="text-xs text-primary">Active</div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stat-title text-primary/80">Total Tasks</div>
                  <div className="stat-value text-3xl font-bold text-primary">
                    {stats.total}
                  </div>
                </div>
                <div className="p-3 bg-primary/20 rounded-full">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-success/20 to-success/5 backdrop-blur-sm border border-success/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stat-title text-success/80">Completed</div>
                  <div className="stat-value text-3xl font-bold text-success">
                    {stats.completed}
                  </div>
                </div>
                <div className="p-3 bg-success/20 rounded-full">
                  <Check className="w-8 h-8 text-success" />
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-warning/20 to-warning/5 backdrop-blur-sm border border-warning/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stat-title text-warning/80">Pending</div>
                  <div className="stat-value text-3xl font-bold text-warning">
                    {stats.pending}
                  </div>
                </div>
                <div className="p-3 bg-warning/20 rounded-full">
                  <Clock className="w-8 h-8 text-warning" />
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-error/20 to-error/5 backdrop-blur-sm border border-error/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stat-title text-error/80">Critical</div>
                  <div className="stat-value text-3xl font-bold text-error">
                    {stats.critical}
                  </div>
                </div>
                <div className="p-3 bg-error/20 rounded-full">
                  <Zap className="w-8 h-8 text-error" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl mb-8 border border-base-300/50">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Overall Progress</h3>
              <div className="text-sm text-base-content/60">
                {Math.round(stats.avgProgress)}% Complete
              </div>
            </div>
            <progress
              className={`progress w-full h-3 ${getProgressColor(
                stats.avgProgress
              )}`}
              value={stats.avgProgress}
              max="100"
            ></progress>
          </div>
        </div>

        {/* Enhanced Control Panel with Search and Add Task */}
        <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl mb-8 border border-base-300/50">
          <div className="card-body p-4 sm:p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Filter className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Task Management
                  </h3>
                  <p className="text-sm text-base-content/60">
                    Search, filter, and organize your tasks
                  </p>
                </div>
              </div>

              {/* Add Task Button */}
              <button
                className="btn btn-primary btn-md sm:btn-lg gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-secondary border-none relative overflow-hidden w-full sm:w-auto"
                onClick={openModal}
              >
                <Plus className="w-4 h-4 z-10" />
                <span className="z-10 text-sm sm:text-base">New Task</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
              </button>
            </div>

            {/* Search Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                <Search className="w-4 h-4 inline mr-2" />
                Search Tasks
              </label>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40" />
                <input
                  type="text"
                  placeholder="Search by title, description, or keywords..."
                  className="input input-bordered w-full pl-12 pr-12 h-12 text-base focus:input-primary transition-all duration-300 bg-base-100/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-circle btn-sm hover:bg-error/10 hover:text-error"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filters Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                <label className="text-sm font-medium">
                  Filter by Status & Priority
                </label>
                {(filter !== "all" || searchTerm) && (
                  <button
                    className="btn btn-ghost btn-xs gap-1 text-base-content/60 hover:text-base-content"
                    onClick={() => {
                      setFilter("all");
                      setSearchTerm("");
                    }}
                  >
                    <X className="w-3 h-3" />
                    Clear All
                  </button>
                )}
              </div>

              {/* Filter Grid - responsive */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  {
                    key: "all",
                    label: "All",
                    icon: <TrendingUp className="w-4 h-4" />,
                    count: tasks.length,
                    color: "btn-neutral",
                  },
                  {
                    key: "pending",
                    label: "Pending",
                    icon: <Clock className="w-4 h-4" />,
                    count: stats.pending,
                    color: "btn-warning",
                  },
                  {
                    key: "completed",
                    label: "Done",
                    icon: <Check className="w-4 h-4" />,
                    count: stats.completed,
                    color: "btn-success",
                  },
                  {
                    key: "critical",
                    label: "Critical",
                    icon: <Zap className="w-4 h-4" />,
                    count: tasks.filter((t) => t.category === "critical")
                      .length,
                    color: "btn-error",
                  },
                  {
                    key: "major",
                    label: "Major",
                    icon: <Target className="w-4 h-4" />,
                    count: tasks.filter((t) => t.category === "major").length,
                    color: "btn-warning",
                  },
                  {
                    key: "minor",
                    label: "Minor",
                    icon: <Tag className="w-4 h-4" />,
                    count: tasks.filter((t) => t.category === "minor").length,
                    color: "btn-info",
                  },
                ].map((filterOption) => (
                  <button
                    key={filterOption.key}
                    className={`btn btn-sm h-auto py-3 px-3 flex-col gap-1 transition-all duration-300 relative ${
                      filter === filterOption.key
                        ? `${filterOption.color} shadow-lg scale-105`
                        : "btn-outline hover:scale-105 hover:shadow-md"
                    }`}
                    onClick={() => setFilter(filterOption.key)}
                  >
                    <div className="flex items-center gap-1">
                      {filterOption.icon}
                      <span className="text-xs font-medium">
                        {filterOption.label}
                      </span>
                    </div>
                    <div
                      className={`badge badge-xs ${
                        filter === filterOption.key
                          ? "badge-neutral"
                          : "badge-primary"
                      }`}
                    >
                      {filterOption.count}
                    </div>
                    {filter === filterOption.key && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Summary */}
            {(searchTerm || filter !== "all") && (
              <div className="mt-6 p-4 bg-gradient-to-r from-base-200/50 to-base-300/30 rounded-lg border border-base-300/30">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium">
                      {filteredTasks.length === 0 ? (
                        <span className="text-error">
                          No tasks match your filters
                        </span>
                      ) : (
                        <span className="text-success">
                          Found {filteredTasks.length} of {tasks.length} tasks
                        </span>
                      )}
                      {searchTerm && (
                        <span className="text-base-content/70">
                          {" "}
                          matching "{searchTerm}"
                        </span>
                      )}
                    </p>
                  </div>

                  {filteredTasks.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-base-content/60">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {filteredTasks.filter((t) => !t.completed).length}{" "}
                        pending
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedTasks.map((task) => {
            const daysUntilDue = getDaysUntilDue(task.dueDate);
            const isOverdue = daysUntilDue < 0;
            const isDueSoon = daysUntilDue <= 2 && daysUntilDue >= 0;

            return (
              <div
                key={task.id}
                className={`card bg-base-100/80 backdrop-blur-sm shadow-2xl border transition-all duration-300 hover:scale-105 hover:shadow-3xl ${
                  task.completed
                    ? "opacity-75 border-success/30"
                    : `border-${
                        categoryConfig[task.category].color.split("-")[1]
                      }/30`
                } ${isOverdue ? "ring-2 ring-error/50" : ""}`}
              >
                <div className="card-body p-6">
                  {/* Task Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`badge ${
                            categoryConfig[task.category].color
                          } gap-2 shadow-lg`}
                        >
                          {categoryConfig[task.category].icon}
                          {task.category.charAt(0).toUpperCase() +
                            task.category.slice(1)}
                        </div>
                        {task.completed && (
                          <div className="badge badge-success gap-2 shadow-lg">
                            <Check className="w-3 h-3" />
                            Done
                          </div>
                        )}
                      </div>
                      <h2
                        className={`card-title text-lg mb-2 ${
                          task.completed
                            ? "line-through text-base-content/60"
                            : ""
                        }`}
                      >
                        {task.title}
                      </h2>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-sm btn-circle"
                      >
                        <Menu className="w-4 h-4" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-40 border border-base-300"
                      >
                        <li>
                          <a
                            onClick={() => toggleComplete(task.id)}
                            className="gap-2"
                          >
                            <Check className="w-4 h-4" />
                            {task.completed ? "Mark Pending" : "Complete"}
                          </a>
                        </li>
                        <li>
                          <a onClick={() => handleEdit(task)} className="gap-2">
                            <Edit3 className="w-4 h-4" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => handleDelete(task.id)}
                            className="gap-2 text-error"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Task Description */}
                  <p
                    className={`text-sm mb-4 ${
                      task.completed
                        ? "text-base-content/60"
                        : "text-base-content/80"
                    }`}
                  >
                    {task.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-base-content/60">
                        {task.progress || 0}%
                      </span>
                    </div>
                    <progress
                      className={`progress w-full h-2 ${getProgressColor(
                        task.progress || 0
                      )}`}
                      value={task.progress || 0}
                      max="100"
                    ></progress>
                  </div>

                  {/* Due Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-base-content/60" />
                      <span className="text-sm text-base-content/60">
                        Due: {task.dueDate}
                      </span>
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full ${
                        isOverdue
                          ? "bg-error/20 text-error"
                          : isDueSoon
                          ? "bg-warning/20 text-warning"
                          : "bg-success/20 text-success"
                      }`}
                    >
                      {isOverdue
                        ? `${Math.abs(daysUntilDue)} days overdue`
                        : isDueSoon
                        ? daysUntilDue === 0
                          ? "Due today"
                          : `${daysUntilDue} days left`
                        : `${daysUntilDue} days left`}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {sortedTasks.length === 0 && (
          <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl border border-base-300/50">
            <div className="card-body text-center py-16">
              <div className="mb-4">
                <div className="w-24 h-24 bg-base-300/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-base-content/30" />
                </div>
                <h2 className="text-2xl font-bold mb-2">No tasks found</h2>
                <p className="text-base-content/60 mb-6">
                  {searchTerm
                    ? "No tasks match your search criteria."
                    : "No tasks match your current filter."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="btn btn-primary gap-2" onClick={openModal}>
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

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl bg-base-100/95 backdrop-blur-xl border border-base-300/50 shadow-3xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {editingTask ? "Edit Task" : "Create New Task"}
              </h3>
              <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Task Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter a compelling task title..."
                  className="input input-bordered input-lg focus:input-primary transition-all duration-300"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Description</span>
                </label>
                <textarea
                  placeholder="Describe your task in detail..."
                  className="textarea textarea-bordered textarea-lg focus:textarea-primary transition-all duration-300 min-h-[120px]"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Priority Level
                    </span>
                  </label>
                  <select
                    className="select select-bordered select-lg focus:select-primary transition-all duration-300"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="minor">🔵 Minor - Low Priority</option>
                    <option value="major">🟡 Major - Medium Priority</option>
                    <option value="critical">
                      🔴 Critical - High Priority
                    </option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Due Date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered input-lg focus:input-primary transition-all duration-300"
                    value={formData.dueDate}
                    onChange={(e) =>
                      setFormData({ ...formData, dueDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Initial Progress
                  </span>
                  <span className="label-text-alt">{formData.progress}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="range range-primary"
                  value={formData.progress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      progress: parseInt(e.target.value),
                    })
                  }
                />
                <div className="w-full flex justify-between text-xs px-2 mt-2">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="modal-action">
                <button
                  className="btn btn-outline btn-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleSubmit}
                >
                  {editingTask ? (
                    <Edit3 className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                  {editingTask ? "Update Task" : "Create Task"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App3;
