import React, { useEffect, useState } from "react";
import ExpenseCard from "../component/ExpenseCard";
import UpdateExpenseModal from "../component/UpdateExpenseModal";

const ViewExpense = () => {
  const [ExpensesList, setExpensesList] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("expenses");
      const parsed = stored ? JSON.parse(stored) : [];
      setExpensesList(parsed);
    } catch (error) {
      console.error("Failed to parse expenses from localStorage:", error);
      setExpensesList([]);
    }
  }, []);

  const handleOnDelete = (index) => {
    const stored = localStorage.getItem("expenses");
    const parsed = stored ? JSON.parse(stored) : [];
    const updated = parsed.filter((_, i) => i != index);
    localStorage.setItem("expenses", JSON.stringify(updated));
    setExpensesList(updated);
    console.log("Deleted id", index);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowModal(true);
  };

  const handleUpdateExpense = (index, updatedExpense) => {
    const updatedList = [...ExpensesList];
    updatedList[index] = updatedExpense;
    localStorage.setItem("expenses", JSON.stringify(updatedList));
    setExpensesList(updatedList); // <-- important to re-render the list
    setShowModal(false);
  };

  return (
    <div className="container mt-3 pt-3">
      <div className="row">
        {ExpensesList.length > 0 ? (
          <ExpenseCard
            expensesList={ExpensesList}
            onDelete={handleOnDelete}
            onEdit={handleEdit}
          />
        ) : (
          <h4 className="text-center text-muted">No Expenses Found</h4>
        )}
        {editIndex != null && showModal ? (
          <UpdateExpenseModal
            onClose={() => setShowModal(false)}
            expense={ExpensesList[editIndex]}
            index={editIndex}
            onUpdate={handleUpdateExpense}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ViewExpense;
