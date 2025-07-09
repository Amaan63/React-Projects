import React from "react";

const TotalCard = ({ GrandTotal, CategoryTotal }) => {
  const categoryTotals = Object.entries(CategoryTotal);
  const getCategoryColor = (category) => {
    switch (category) {
      case "Food":
        return "bg-success text-light";
      case "Transport":
        return "bg-warning text-dark";
      case "Shopping":
        return "bg-info text-dark";
      case "Utilities":
        return "bg-secondary text-light";
      default:
        return "bg-light text-dark";
    }
  };
  return (
    <div className="card shadow-sm rounded-4 border-2 mb-4 w-50">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3 text-center">
          Total Expenses Overview
        </h5>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {categoryTotals.length > 0 ? (
            categoryTotals.map(([category, total]) => (
              <div className="col" key={category}>
                <div
                  className={`border p-3 rounded ${getCategoryColor(
                    category
                  )} h-100`}
                >
                  <h6 className="mb-1">{category}</h6>
                  <p className="mb-0 fw-bold fs-5">₹{total}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-12">
              <div className="border p-3 rounded bg-light h-100">
                <h4 className="mb-1 text-danger text-center">
                  No Expenses Available
                </h4>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex justify-content-end mt-4">
          <h5 className="text-end">
            Grand Total: <span className="text-primary">₹{GrandTotal}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TotalCard;
