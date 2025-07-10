import React, { useEffect, useState } from "react";
import SearchAndFilter from "../component/SearchAndFilter";
import OverviewCards from "../component/OverviewCards";
import CryptoList from "../component/CryptoList";
import DetailedCoinCards from "../component/DetailedCoinCards";
import axios from "axios";

const CryptoDashboard = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [globalData, setGlobalData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteCoins, setFavoriteCoins] = useState([]);

  const fetchCryptoData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`;
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 50,
            page: 1,
            sparkline: false,
          },
        }
      );
      setCryptoData(response.data);
    } catch (error) {
      console.error("Failed to Fetch the Crypto Values");
      setCryptoData([]);
    }
  };

  const fetchGlobalData = async () => {
    const url = `https://api.coingecko.com/api/v3/global`;
    try {
      const response = await axios.get(url);
      setGlobalData(response.data.data); // ✅ use response.data.data
    } catch (error) {
      console.error("Failed to fetch the Global Values");
    }
  };

  const filteredCoins =
    searchTerm.trim() === ""
      ? cryptoData
      : cryptoData.filter(
          (coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const toggleFavorite = (coinId) => {
    setFavoriteCoins((prevFavorites) =>
      prevFavorites.includes(coinId)
        ? prevFavorites.filter((id) => id !== coinId)
        : [...prevFavorites, coinId]
    );
  };

  useEffect(() => {
    fetchCryptoData();
    fetchGlobalData();
  }, []); // ✅ Dependency array is empty to run once on mount

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Search and Filters */}
      <SearchAndFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Market Overview Cards */}
      <OverviewCards data={globalData} />

      {/* Detailed Coin Cards */}
      <DetailedCoinCards
        cryptoData={cryptoData}
        favoriteCoins={favoriteCoins}
      />

      {/* Crypto List */}
      <CryptoList
        filteredCoins={filteredCoins}
        toggleFavorite={toggleFavorite}
        favoriteCoins={favoriteCoins}
      />
    </main>
  );
};

export default CryptoDashboard;
