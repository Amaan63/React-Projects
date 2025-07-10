import { Star, TrendingDown, TrendingUp } from "lucide-react";
import React, { useState } from "react";

const CryptoList = ({ filteredCoins, toggleFavorite, favoriteCoins }) => {
  const formatPrice = (num) =>
    num
      ? `$${num.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
      : "$0";

  const formatMarketCap = (num) =>
    num >= 1e12
      ? `$${(num / 1e12).toFixed(2)}T`
      : num >= 1e9
      ? `$${(num / 1e9).toFixed(2)}B`
      : num >= 1e6
      ? `$${(num / 1e6).toFixed(2)}M`
      : `$${num.toLocaleString()}`;

  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <div className="card-title mb-4">
          <TrendingUp className="mr-2" />
          Top Cryptocurrencies
        </div>

        <div className="overflow-x-auto">
          {filteredCoins.length === 0 ? (
            <div className="text-center text-sm text-warning mb-4">
              No coins match your search.
            </div>
          ) : (
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th className="w-12"></th>
                  <th>#</th>
                  <th>Coin</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th>Market Cap</th>
                  <th>Volume (24h)</th>
                  <th>Supply</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin, index) => (
                  <tr key={coin.id} className="hover">
                    <td>
                      <button
                        className={`btn btn-ghost btn-xs ${
                          favoriteCoins.includes(coin.id) ? "text-warning" : ""
                        }`}
                        onClick={() => toggleFavorite(coin.id)}
                      >
                        <Star
                          size={16}
                          fill={
                            favoriteCoins.includes(coin.id)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>
                    </td>
                    <td className="font-bold">{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={coin.image} alt={coin.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{coin.name}</div>
                          <div className="text-sm opacity-50">
                            {coin.symbol.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">
                      {formatPrice(coin.current_price)}
                    </td>
                    <td>
                      <div
                        className={`flex items-center ${
                          coin.price_change_percentage_24h >= 0
                            ? "text-success"
                            : "text-error"
                        }`}
                      >
                        {coin.price_change_percentage_24h >= 0 ? (
                          <TrendingUp size={16} />
                        ) : (
                          <TrendingDown size={16} />
                        )}
                        <span className="ml-1 font-semibold">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </div>
                      <div className="text-xs opacity-70">
                        {formatPrice(Math.abs(coin.price_change_24h))}
                      </div>
                    </td>
                    <td className="font-medium">
                      {formatMarketCap(coin.market_cap)}
                    </td>
                    <td>{formatMarketCap(coin.total_volume)}</td>
                    <td>
                      <div className="text-sm">
                        {(coin.circulating_supply / 1e6).toFixed(1)}M{" "}
                        {coin.symbol.toUpperCase()}
                      </div>
                      {coin.max_supply && (
                        <div className="text-xs opacity-70">
                          Max: {(coin.max_supply / 1e6).toFixed(1)}M
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
