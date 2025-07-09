import { Clock } from "lucide-react";
import React from "react";

const HourlyForecast = ({ data }) => {
  const hourlyForecast = data.forecast.forecastday[0].hour.map((hourData) => ({
    hour: new Date(hourData.time_epoch * 1000).getHours() + ":00",
    icon: (
      <img
        src={`https:${hourData.condition.icon}`}
        alt={hourData.condition.text}
        className="w-10 h-10 mx-auto"
      />
    ),
    temperature: hourData.temp_c,
    condition: hourData.condition.text,
  }));
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-white mr-2" />
        <h2 className="text-xl font-semibold text-white">Hourly Forecast</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {hourlyForecast.map((hour, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white/10 rounded-xl p-4 text-center min-w-[100px]"
            >
              <p className="text-white/80 text-sm mb-2">{hour.hour}</p>
              <div className="text-2xl mb-2">{hour.icon}</div>
              <p className="text-white font-semibold mb-1">
                {hour.temperature}°C
              </p>
              <p className="text-white/70 text-xs">{hour.condition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
