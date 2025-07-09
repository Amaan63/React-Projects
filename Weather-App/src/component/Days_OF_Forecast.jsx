import React from "react";

const Days_OF_Forecast = ({ data }) => {
  const dailyForecast = data.forecast.forecastday.map((dayData) => ({
    day: new Date(dayData.date).toLocaleDateString("en-US", {
      weekday: "short",
    }), // e.g., "Mon"
    icon: (
      <img
        src={`https:${dayData.day.condition.icon}`}
        alt={dayData.day.condition.text}
        className="w-8 h-8"
      />
    ),
    condition: dayData.day.condition.text,
    high: dayData.day.maxtemp_c,
    low: dayData.day.mintemp_c,
  }));
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h2 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h2>
      <div className="space-y-3">
        {dailyForecast.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white/10 rounded-xl"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{day.icon}</span>
              <div>
                <p className="text-white font-semibold">{day.day}</p>
                <p className="text-white/70 text-sm">{day.condition}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">{day.high}°C</p>
              <p className="text-white/70 text-sm">{day.low}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Days_OF_Forecast;
