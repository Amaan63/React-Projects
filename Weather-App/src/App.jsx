import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderWithSearch from "./component/HeaderWithSearch";
import AdditionalDetails from "./component/AdditionalDetails";
import HourlyForecast from "./component/HourlyForecast";
import Days_OF_Forecast from "./component/Days_OF_Forecast";
import MainWeatherCard from "./component/MainWeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    try {
      let uri = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=5&aqi=yes&alerts=no`;
      let res = await axios.get(uri);
      setWeatherData(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load");
    }
  };

  useEffect(() => {
    fetchWeather("Mumbai");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 animate-gradient-x p-4">
      <div className="max-w-6xl mx-auto">
        {weatherData ? (
          <>
            {/* Header with Search */}
            <HeaderWithSearch fetchWeather={fetchWeather} />

            {/* Main Weather Card */}
            <MainWeatherCard data={weatherData} />

            {/* Additional Details */}
            <AdditionalDetails data={weatherData} />

            {/* Hourly Forecast */}
            <HourlyForecast data={weatherData} />

            {/* 5-Day Forecast */}
            <Days_OF_Forecast data={weatherData} />

            {/* Footer */}
            <div className="text-center mt-8 text-white/60">
              <p>Made By Amaan Sayyed</p>
            </div>
          </>
        ) : (
          <h1 className="text-white text-center py-8">No Data Found</h1>
        )}
      </div>
    </div>
  );
};

export default App;
