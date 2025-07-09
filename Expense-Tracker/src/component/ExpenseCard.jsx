import React from "react";

const ExpenseCard = ({ expensesList, onDelete, onEdit }) => {
  // Title text color
  const getTitleTextColor = (category) => {
    switch (category) {
      case "Food":
        return "text-success";
      case "Transport":
        return "text-warning";
      case "Shopping":
        return "text-info";
      case "Utilities":
        return "text-secondary";
      default:
        return "text-dark";
    }
  };

  // Category badge background
  const getCategoryColor = (category) => {
    switch (category) {
      case "Food":
        return "bg-success";
      case "Transport":
        return "bg-warning text-dark";
      case "Shopping":
        return "bg-info text-dark";
      case "Utilities":
        return "bg-secondary";
      default:
        return "bg-light text-dark";
    }
  };

  // Border color on the left of the title
  const getTitleBorder = (category) => {
    switch (category) {
      case "Food":
        return "border-success";
      case "Transport":
        return "border-warning";
      case "Shopping":
        return "border-info";
      case "Utilities":
        return "border-secondary";
      default:
        return "border-dark";
    }
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      {expensesList.map((expense, index) => (
        <div className="col d-flex justify-content-center" key={index}>
          <div
            className="card border-1 shadow-sm rounded-3"
            style={{ width: "22rem" }}
          >
            <div className="card-body">
              <h5
                className={`card-title ps-3 mb-3 border-start border-4 ${getTitleBorder(
                  expense.category
                )} ${getTitleTextColor(expense.category)}`}
              >
                {expense.title}
              </h5>

              <p className="card-text mb-1">
                <strong>Category:</strong>{" "}
                <span className={`badge ${getCategoryColor(expense.category)}`}>
                  {expense.category}
                </span>
              </p>
              <p className="card-text mb-1">
                <strong>Amount:</strong> ₹{expense.amount}
              </p>
              <p className="card-text mb-3">
                <strong>Date:</strong> {expense.date}
              </p>

              <div className="d-flex justify-content-center gap-2">
                <button
                  className="btn btn-outline-primary btn-sm px-3"
                  onClick={() => {
                    onEdit(index);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger btn-sm px-3"
                  onClick={() => {
                    onDelete(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseCard;
