import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CoinModal from './CoinModal';
import {roundComma, convertMc } from '../numbers/NumChanger';

const MarketTable = ({ market }) => {
  const [searched, setSearched] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [theCoin, setTheCoin] = useState({});

  const filterMarket = market.filter(coin => {
    if(coin.name.toLowerCase().includes(searched.toLowerCase()) || coin.symbol.toLowerCase().includes(searched.toLowerCase())){
      return(coin);
    }else{
      return null;
    }
  });


  const onTermSubmit = (term) => {
    setSearched(term);
  }

  const setCoinObj = (coin) => {
    console.log(coin);
    setIsOpen(true);
    setTheCoin(coin);
  }

  return(
    <div className="ui very padded segment">
      <SearchBar onTermSubmit={onTermSubmit} searched={searched} />
      <CoinModal theCoin={theCoin} isOpen={isOpen} setIsOpen={setIsOpen}/>
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
            setTheCoin(coin);
            return(
              <tr key={coin.name} onClick={() => setCoinObj(coin)} className="market-table-row">
                <td>{coin.market_cap_rank}</td>
                <td><img className="ui image avatar" src={coin.image}/></td>
                <td>{coin.name}</td>
                <td>${roundComma(coin.current_price)}</td>
                <td>{roundComma(coin.price_change_percentage_24h)}%</td>
                <td>{convertMc(coin.market_cap)}</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
      
    </div>
  )
}

export default MarketTable;