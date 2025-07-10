import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const DetailedCoinCards = ({ cryptoData, favoriteCoins }) => {
  const favoriteData = (cryptoData || []).filter((coin) =>
    (favoriteCoins || []).includes(coin.id)
  );

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
    <div className="m-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        ⭐ Favourite Coins
      </h2>

      {favoriteData.length === 0 ? (
        <div className="text-center text-warning font-medium">
          No coin is marked as favourite.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
          {favoriteData.slice(0, 2).map((coin) => (
            <div key={coin.id} className="card bg-base-200 shadow-md p-4">
              <div className="card-body p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 bg-base-300">
                        <img src={coin.image} alt={coin.name} />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">{coin.name}</h3>
                      <p className="text-sm opacity-70">
                        {coin.symbol.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">
                      {formatPrice(coin.current_price)}
                    </div>
                    <div
                      className={`flex items-center justify-end ${
                        coin.price_change_percentage_24h >= 0
                          ? "text-success"
                          : "text-error"
                      }`}
                    >
                      {coin.price_change_percentage_24h >= 0 ? (
                        <TrendingUp size={14} />
                      ) : (
                        <TrendingDown size={14} />
                      )}
                      <span className="ml-1 font-semibold text-sm">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="divider my-3"></div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs opacity-60">24h High</div>
                    <div>{formatPrice(coin.high_24h)}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-60">24h Low</div>
                    <div>{formatPrice(coin.low_24h)}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-60">Market Cap</div>
                    <div>{formatMarketCap(coin.market_cap)}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-60">Volume</div>
                    <div>{formatMarketCap(coin.total_volume)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailedCoinCards;
