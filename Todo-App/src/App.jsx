import React, { useState } from "react";
import Title from "./component/Title";
import ListTodo from "./component/ListTodo";
import AddTodo from "./component/AddTodo";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const storeTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const handleEdit = (index) => {
    setEditIndex(index); // track which item is being edited
  };

  const handleUpdate = (updatedTodo) => {
    const updatedTodos = [...todoList];
    updatedTodos[editIndex] = updatedTodo;
    setTodoList(updatedTodos);
    setEditIndex(null); // reset to add mode
  };

  const handleDelete = (index) => {
    const updatedTodo = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodo);
    console.log("Deleted Todo");
  };

  const handleMarkCompleted = (index) => {
    const updated = [...todoList];
    updated[index].status = "Completed";
    setTodoList(updated);
  };

  return (
    <>
      <Title />
      <div className="container mt-3 pt-3">
        <div className="row">
          <div className="col-6 col-md-4">
            <AddTodo
              onAdd={storeTodo}
              onUpdate={handleUpdate}
              editTodo={editIndex !== null ? todoList[editIndex] : null}
            />
          </div>
          <div className="col-md-8">
            <ListTodo
              todos={todoList}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onMarkCompleted={handleMarkCompleted}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
