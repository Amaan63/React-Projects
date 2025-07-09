import { Sunrise, Sunset, ThermometerSun } from "lucide-react";
import React from "react";

const AdditionalDetails = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center mb-3">
          <ThermometerSun className="w-6 h-6 text-yellow-300 mr-2" />
          <h3 className="text-white font-semibold">UV Index</h3>
        </div>
        <p className="text-3xl font-bold text-white">{data.current?.uv}</p>
      </div>

      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center mb-3">
          <Sunrise className="w-6 h-6 text-yellow-300 mr-2" />
          <h3 className="text-white font-semibold">Sunrise</h3>
        </div>
        <p className="text-2xl font-bold text-white">
          {data.forecast?.forecastday[0]?.astro?.sunrise}
        </p>
      </div>

      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center mb-3">
          <Sunset className="w-6 h-6 text-orange-300 mr-2" />
          <h3 className="text-white font-semibold">Sunset</h3>
        </div>
        <p className="text-2xl font-bold text-white">
          {data.forecast?.forecastday[0]?.astro?.sunset}
        </p>
      </div>
    </div>
  );
};

export default AdditionalDetails;
