// BitcoinChart.js
import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const BitcoinChart = ({ bitcoinData }) => {
  return (
    <div className="bitcoin-chart">
      <h2>Bitcoin Chart</h2>
      {bitcoinData && (
        <TradingViewWidget
          symbol="BITSTAMP:BTCUSD"
          theme="dark"
          locale="en"
          autosize
        />
      )}
    </div>
  );
};

export default BitcoinChart;

