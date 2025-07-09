import React, { useState } from "react";

const UpdateExpenseModal = ({ onClose, expense, index, onUpdate }) => {
  const [updatedExpense, setUpdatedExpense] = useState(expense);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(index, updatedExpense); // <-- call parent to update
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Expense</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={updatedExpense.title}
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  value={updatedExpense.amount}
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={updatedExpense.date}
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  className="form-select"
                  value={updatedExpense.category}
                  onChange={handleOnChange}
                >
                  <option value="">Choose...</option>
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Utilities">Utilities</option>
                </select>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateExpenseModal;
