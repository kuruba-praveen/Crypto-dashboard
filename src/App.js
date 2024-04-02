// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrendingCoins from './TrendingCoins';
import YouMayAlsoLike from './YouMayAlsoLike';
import BitcoinChart from './BitcoinChart';


const App = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
        );
        setBitcoinData(response.data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrendingCoins(response.data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchBitcoinData();
    fetchTrendingCoins();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="left-column">
          <BitcoinChart bitcoinData={bitcoinData} />
        </div>
        <div className="right-column">
          <TrendingCoins trendingCoins={trendingCoins} />
          <YouMayAlsoLike trendingCoins={trendingCoins} />
        </div>
      </div>
    </div>
  );
};

export default App;
