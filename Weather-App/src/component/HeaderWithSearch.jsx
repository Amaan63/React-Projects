import { Search } from "lucide-react";
import React, { useState } from "react";

const HeaderWithSearch = ({ fetchWeather }) => {
  const [city, setCity] = useState("Mumbai");

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };
  return (
    <div className="mb-8">
      <div className="relative max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={handleOnChange}
            placeholder="Search for a city..."
            className="w-full px-4 py-3 pl-12 pr-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-xl p-2 transition-colors"
            type="submit"
          >
            <Search className="w-4 h-4 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderWithSearch;
