import React from "react";

const ListTodo = ({ todos, onEdit, onDelete, onMarkCompleted }) => {
  return (
    <div className="container border border-dark">
      <table className="table table-striped table-hover ">
        <thead>
          {todos.length === 0 ? (
            <tr>
              <th className="fs-1 text-center text-danger">
                No todos added yet.
              </th>
            </tr>
          ) : (
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Content</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          )}
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr>
              <td>{todo.name}</td>
              <td>{todo.content}</td>
              <td>{todo.date}</td>
              <td>
                {todo.status === "Completed" ? (
                  <span className="m-2 badge bg-success">Completed</span>
                ) : (
                  <div>
                    <span
                      className={`m-2 badge ${
                        todo.status === "Upcoming" ? `bg-primary` : `bg-warning`
                      }`}
                    >
                      {todo.status}
                    </span>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => onMarkCompleted(index)}
                    >
                      ✅ Mark as Completed
                    </button>
                  </div>
                )}
              </td>
              <td>
                <div className="d-flex gap-2 px-3">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => onEdit(index)}
                    disabled={todo.status === "Completed"}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(index)}
                    disabled={todo.status === "Completed"}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
