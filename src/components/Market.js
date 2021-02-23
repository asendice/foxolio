import React, { useState, useEffect }from 'react';
import axios from 'axios';
// import getMarket from '../util/api';
import Navigation from './Navigation';
import MarketTable from './MarketTable';


const Market = () => {
  const [ market, setMarket ] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per=100&page=1&sparkline=false')
      .then(res => {
      setMarket(res.data);
    })
    .catch(err => console.log(err));
  },[]);

  console.log(market);
  return(
    <div>
      <Navigation />
      <MarketTable market={market} />
    </div>
  )
}

export default Market;