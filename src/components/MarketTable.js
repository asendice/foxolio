import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CoinModal from './CoinModal';
import {roundComma, convertMc } from '../numbers/NumChanger';

const MarketTable = ({ market, passPortListUp }) => {
  const [searched, setSearched] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [theCoin, setTheCoin] = useState({});
  const [color, setColor] = useState('black');

  const filterMarket = market.filter(coin => {
    if(coin.name.toLowerCase().includes(searched.toLowerCase()) || coin.symbol.toLowerCase().includes(searched.toLowerCase())){
      return(coin);
    }
  });

  const onTermSubmit = (term) => {
    setSearched(term);
  }

  const setCoinObj = (coin) => {
    setIsOpen(true);
    setTheCoin(coin);
    
  }

  return(
    <div className="ui very padded segment">
      <SearchBar onTermSubmit={onTermSubmit} searched={searched} />
      <table className="ui padded unstackable table">
        <thead>
          <tr>
            <th className="">Rank</th>
            <th className=""></th>
            <th className="four wide">Name</th>
            <th className="four wide">Price</th>
            <th className="four wide">24hr</th>
            <th className="three wide">Market Cap</th>
          </tr>
        </thead>
        <tbody >
          {filterMarket.map(coin => {
            return(
              <>
              {}
              <tr key={coin.name} onClick={() => setCoinObj(coin)} className="market-table-row">
                <td>{coin.market_cap_rank}</td>
                <td><img className="ui image avatar" src={coin.image}/></td>
                <td>{coin.name}</td>
                <td>${roundComma(coin.current_price)}</td>
                <td style={{color: (coin.price_change_percentage_24h) >= 0 ? "green" : "red"}}>{roundComma(coin.price_change_percentage_24h)}%</td>
                {/* <td style={{color: Math.sign(coin.price_change_percentage_24h) === -1 ? "red" : "green"}}>{roundComma(coin.price_change_percentage_24h)}%</td> */}
                <td>{convertMc(coin.market_cap)}</td>
              </tr>
            </>
            )
          })}
        </tbody>
      </table>
      <CoinModal theCoin={theCoin} isOpen={isOpen} setIsOpen={setIsOpen} passPortListUp={passPortListUp }/>
    </div>
  )
}

export default MarketTable;