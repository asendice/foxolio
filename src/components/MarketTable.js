import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CoinModal from './CoinModal';
import {roundComma, convertMc } from '../numbers/NumChanger';

const MarketTable = ({ market }) => {

  const [searched, setSearched] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

  const modalOpen = () => {
    setIsOpen(true);
  }
  // const modalClose = (bool) => {
  //   setOpen(bool);
  // }



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
            const name = coin.name;
            const img = coin.image;
            const rank = coin.market_cap_rank;
            const price = roundComma(coin.current_price);
            const percent = roundComma(coin.price_change_percentage_24h);
            const marketCap = convertMc(coin.market_cap);
            const allTimeHigh = roundComma(coin.ath);
            const symbol = coin.symbol;
            const lastUpdated = coin.last_updated;
            const priceChange = roundComma(coin.price_change_24h);
            return(
              <tr onClick={modalOpen} className="market-table-row">
                <td>{rank}</td>
                <td><img className="ui image avatar" src={img}/></td>
                <td>{name}</td>
                <td>${price}</td>
                <td>{percent}%</td>
                <td>{marketCap}</td>
                <CoinModal
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  // modalOpen={modalOpen} 
                  // modalClose={modalClose}
                  name={name}
                  symbol={symbol}
                  img={img}
                  price={price}
                  lastUpdated={lastUpdated}
                  percent={percent}
                  allTimeHigh={allTimeHigh}
                  priceChange={priceChange} />
              </tr>
            )
          })}
          
        </tbody>
      </table>
      
    </div>
  )
}

export default MarketTable;