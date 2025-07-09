import { Droplets, Eye, Gauge, MapPin, Wind } from "lucide-react";
import React from "react";

const MainWeatherCard = ({ data }) => {
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Main Info */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <MapPin className="w-5 h-5 text-white/80 mr-2" />
            <h1 className="text-2xl font-bold text-white">
              {data.location?.name}
            </h1>
          </div>
          <p className="text-white/80 mb-4">
            {data.location?.region},{data.location?.country}
          </p>

          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="text-6xl mr-4">
              <img
                src={`https:${data.current?.condition?.icon}`}
                alt={data.current?.condition?.text}
                className="w-16 h-16 brightness-110" // Adjust size as needed
              />
            </span>
            <div>
              <div className="text-5xl font-bold text-white mb-1">
                {data.current?.temp_c}°C
              </div>
              <p className="text-white/80 text-lg">
                {data.current?.condition?.text}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Additional Info */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Gauge className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/80 text-sm">Pressure</p>
            <p className="text-white font-semibold">
              {data.current.pressure_mb} hPa
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Droplets className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/80 text-sm">Humidity</p>
            <p className="text-white font-semibold">{data.current.humidity}%</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Wind className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/80 text-sm">Wind Speed</p>
            <p className="text-white font-semibold">
              {data.current.wind_kph} km/h
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Eye className="w-6 h-6 text-white/80 mx-auto mb-2" />
            <p className="text-white/80 text-sm">Visibility</p>
            <p className="text-white font-semibold">{data.current.vis_km} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeatherCard;
