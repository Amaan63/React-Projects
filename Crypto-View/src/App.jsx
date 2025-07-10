import React from "react";
import Header from "./section/Header";
import CryptoDashboard from "./section/CryptoDashboard";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <Header />

      {/* DashBoard */}
      <CryptoDashboard />
    </div>
  );
};

export default App;
