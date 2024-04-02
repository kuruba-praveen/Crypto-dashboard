// YouMayAlsoLike.js
import React from 'react';

const YouMayAlsoLike = ({ trendingCoins }) => {
  return (
    <div className="you-may-also-like">
      <h2>You May Also Like</h2>
      <div className="carousel">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="coin-item">
            <img src={coin.item.large} alt={coin.item.name} />
            <p>{coin.item.symbol}</p>
            {/* Add price, price change, and price graph */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
