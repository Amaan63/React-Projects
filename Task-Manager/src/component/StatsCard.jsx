import React from "react";
import { TrendingUp, Check, Clock, Zap } from "lucide-react";

const StatsCard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        icon={<TrendingUp className="w-8 h-8 text-primary" />}
        title="Total Tasks"
        value={stats.total}
        bgGradient="from-primary/20 to-primary/5"
        textColor="text-primary"
      />
      <StatCard
        icon={<Check className="w-8 h-8 text-success" />}
        title="Completed"
        value={stats.completed}
        bgGradient="from-success/20 to-success/5"
        textColor="text-success"
      />
      <StatCard
        icon={<Clock className="w-8 h-8 text-warning" />}
        title="Pending"
        value={stats.pending}
        bgGradient="from-warning/20 to-warning/5"
        textColor="text-warning"
      />
      <StatCard
        icon={<Zap className="w-8 h-8 text-error" />}
        title="Critical"
        value={stats.critical}
        bgGradient="from-error/20 to-error/5"
        textColor="text-error"
      />
    </div>
  );
};

const StatCard = ({ icon, title, value, bgGradient, textColor }) => (
  <div
    className={`card bg-gradient-to-br ${bgGradient} backdrop-blur-sm border border-current shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
  >
    <div className="card-body">
      <div className="flex items-center justify-between">
        <div>
          <div className={`stat-title ${textColor} text-opacity-80`}>
            {title}
          </div>
          <div className={`stat-value text-3xl font-bold ${textColor}`}>
            {value}
          </div>
        </div>
        <div className={`p-3 bg-opacity-20 rounded-full`}>{icon}</div>
      </div>
    </div>
  </div>
);

export default StatsCard;
