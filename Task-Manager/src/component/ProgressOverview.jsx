import React from "react";

const ProgressOverview = ({ avgProgress }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return "progress-success";
    if (progress >= 50) return "progress-warning";
    return "progress-error";
  };

  return (
    <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl mb-8 border border-base-300/50">
      <div className="card-body">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Overall Progress</h3>
          <div className="text-sm text-base-content/60">
            {Math.round(avgProgress)}% Complete
          </div>
        </div>
        <progress
          className={`progress w-full h-3 ${getProgressColor(avgProgress)}`}
          value={avgProgress}
          max="100"
        />
      </div>
    </div>
  );
};

export default ProgressOverview;
