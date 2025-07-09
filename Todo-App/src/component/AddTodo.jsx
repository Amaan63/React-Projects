import React, { useEffect, useState } from "react";

const AddTodo = ({ onAdd, onUpdate, editTodo }) => {
  const [todo, setTodo] = useState({
    name: "",
    content: "",
    date: "",
    status: "",
  });

  // Handle input change for all fields
  const handleChange = (e) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log(todo); // log todo data
    if (editTodo) {
      onUpdate(todo);
    } else {
      onAdd(todo);
    }
    setTodo({
      name: "",
      content: "",
      date: "",
      status: "",
    });
  };

  useEffect(() => {
    if (editTodo) {
      setTodo(editTodo);
    }
  }, [editTodo]);
  return (
    <div className="border border-dark p-4 rounded">
      <h3 className="mb-3 text-center">Add Todo</h3>
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="col-12">
          <label htmlFor="todoName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="todoName"
            placeholder="Enter your name"
            name="name"
            value={todo.name}
            onChange={handleChange}
          />
        </div>

        {/* Content */}
        <div className="col-12">
          <label htmlFor="todoContent" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="todoContent"
            placeholder="Enter todo details"
            rows="3"
            name="content"
            value={todo.content}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Date */}
        <div className="col-md-6">
          <label htmlFor="todoDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="todoDate"
            name="date"
            value={todo.date}
            onChange={handleChange}
          />
        </div>

        {/* Status */}
        <div className="col-md-6">
          <label htmlFor="todoStatus" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="status"
            value={todo.status}
            onChange={handleChange}
          >
            <option defaultValue>Select the Status</option>
            <option value="Pending">Pending</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-success col-12">
            {editTodo ? "Update Todo" : "Add Todo"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
