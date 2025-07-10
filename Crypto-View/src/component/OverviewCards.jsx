import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const formatNumber = (num) => {
  if (!num) return "$0";
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  return `$${num.toLocaleString()}`;
};

const OverviewCards = ({ data }) => {
  const marketCap = data?.total_market_cap?.usd;
  const volume = data?.total_volume?.usd;
  const marketCapChange = data?.market_cap_change_percentage_24h_usd;
  const btcDominance = data?.market_cap_percentage?.btc;
  const activeCoins = data?.active_cryptocurrencies;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Total Market Cap */}
      <div className="stat bg-base-200 rounded-lg shadow">
        <div className="stat-title">Total Market Cap</div>
        <div className="stat-value text-primary">{formatNumber(marketCap)}</div>
        <div
          className={`stat-desc ${
            marketCapChange >= 0 ? "text-success" : "text-error"
          }`}
        >
          {marketCapChange >= 0 ? (
            <ArrowUp size={16} className="inline mr-1" />
          ) : (
            <ArrowDown size={16} className="inline mr-1" />
          )}
          {marketCapChange?.toFixed(2)}% (24h)
        </div>
      </div>

      {/* 24h Volume */}
      <div className="stat bg-base-200 rounded-lg shadow">
        <div className="stat-title">24h Volume</div>
        <div className="stat-value text-secondary">{formatNumber(volume)}</div>
        <div
          className={`stat-desc ${
            marketCapChange < 0 ? "text-error" : "text-success"
          }`}
        >
          {marketCapChange < 0 ? (
            <ArrowDown size={16} className="inline mr-1" />
          ) : (
            <ArrowUp size={16} className="inline mr-1" />
          )}
          {marketCapChange?.toFixed(2)}% (24h)
        </div>
      </div>

      {/* BTC Dominance */}
      <div className="stat bg-base-200 rounded-lg shadow">
        <div className="stat-title">BTC Dominance</div>
        <div className="stat-value">{btcDominance?.toFixed(2)}%</div>
        <div className="stat-desc">
          <ArrowUp size={16} className="inline mr-1 text-success" />
          vs Altcoins
        </div>
      </div>

      {/* Active Coins */}
      <div className="stat bg-base-200 rounded-lg shadow">
        <div className="stat-title">Active Coins</div>
        <div className="stat-value">{activeCoins?.toLocaleString()}</div>
        <div className="stat-desc">Tracked globally</div>
      </div>
    </div>
  );
};

export default OverviewCards;
