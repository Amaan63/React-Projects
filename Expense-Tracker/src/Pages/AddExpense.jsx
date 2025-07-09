import React, { useState } from "react";
import AddExpenseForm from "../component/AddExpenseForm";

const AddExpense = () => {
  const [ExpenseList, setExpenseList] = useState([]);
  const storeExpenses = (newExpense) => {
    const stored = JSON.parse(localStorage.getItem("expenses")) || [];
    const updatedList = [...stored, newExpense];
    localStorage.setItem("expenses", JSON.stringify(updatedList));
  };

  

  return (
    <div className="container d-flex justify-content-center align-items-center mt-3 pt-3 ">
      <div className="row border border-dark-subtle p-3">
        <AddExpenseForm storeExpense={storeExpenses} />
      </div>
    </div>
  );
};

export default AddExpense;
