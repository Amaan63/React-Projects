import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddExpense from "./Pages/AddExpense";
import ViewExpense from "./Pages/ViewExpense";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-light" to={"/"}>
              Expense Tracker
            </NavLink>
            <div className="d-flex gap-2 nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-light"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/addExpense"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-light"}`
                }
              >
                Add Expense
              </NavLink>
              <NavLink
                to="/viewExpense"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-light"}`
                }
              >
                View Expense
              </NavLink>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addExpense" element={<AddExpense />} />
          <Route path="/viewExpense" element={<ViewExpense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
