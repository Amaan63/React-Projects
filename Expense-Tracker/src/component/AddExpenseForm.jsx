import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExpenseForm = ({ storeExpense }) => {
  const navigate = useNavigate();

  const [Expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleOnChange = (e) => {
    setExpense((prevExpense) => ({
      ...prevExpense,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storeExpense(Expense);
    console.log(Expense);
    setExpense({
      title: "",
      amount: "",
      date: "",
      category: "",
    });
    navigate("/viewExpense");
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <h1 className="text-secondary text-center">Add Expenses</h1>
      <div className="col-md-6">
        <label htmlFor="title" className="form-label">
          Expense Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={Expense.title}
          required
          onChange={handleOnChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="amount" className="form-label">
          Amount (₹)
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          value={Expense.amount}
          required
          onChange={handleOnChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={Expense.date}
          required
          onChange={handleOnChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          className="form-select"
          name="category"
          value={Expense.category}
          required
          onChange={handleOnChange}
        >
          <option value="">Choose...</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Utilities">Utilities</option>
        </select>
      </div>

      <div className="col-12 mt-3 pt-3">
        <button type="submit" className="btn btn-primary col-md-12">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
