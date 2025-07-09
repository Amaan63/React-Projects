import React, { useEffect, useMemo, useState } from "react";
import TotalCard from "../component/TotalCard";

const Home = () => {
  const [ExpenseList, setExpenseList] = useState([]);
  useEffect(() => {
    try {
      const storedList = localStorage.getItem("expenses");
      const parsedList = storedList ? JSON.parse(storedList) : [];
      setExpenseList(parsedList);
    } catch (error) {
      console.error("Failed to Parse from the localStorage ", error);
      setExpenseList([]);
    }
  }, []);

  const GrandTotal = useMemo(() => {
    return ExpenseList.reduce((total, expense) => {
      return total + Number(expense.amount);
    }, 0);
  }, [ExpenseList]);

  {
    /*
     * useMemo is used to memoize the calculation so it only re-runs
     * when ExpenseList changes — improving performance.
     *
     * This logic calculates the total expense for each category.
     * For every expense:
     *  - If the category already exists in the accumulator, add the amount to it.
     *  - If it doesn't exist, create a new category key and set the amount.
     */
  }
  const categoryTotal = useMemo(() => {
    return ExpenseList.reduce((categoryTotal, expense) => {
      const category = expense.category;
      const amount = Number(expense.amount);
      if (categoryTotal[category]) {
        categoryTotal[category] += amount;
      } else {
        categoryTotal[category] = amount;
      }
      return categoryTotal;
    }, {});
  }, [ExpenseList]);

  console.log(categoryTotal);

  return (
    <div className="containercontainer d-flex justify-content-center align-items-center mt-3 pt-3 ">
      <TotalCard GrandTotal={GrandTotal} CategoryTotal={categoryTotal} />
    </div>
  );
};

export default Home;
