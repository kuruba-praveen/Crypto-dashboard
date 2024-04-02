// TrendingCoins.js
import React from 'react';

const TrendingCoins = ({ trendingCoins }) => {
  return (
    <div className="trending-coins">
      <h2>Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map((coin) => (
          <li key={coin.item.id}>{coin.item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
