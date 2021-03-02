import React, { useState, useEffect }from 'react';
import axios from 'axios';
// import getMarket from '../util/api';
import Navigation from './Navigation';
import MarketTable from './MarketTable';


const Market = ({ passPortListUp }) => {
  const [ market, setMarket ] = useState([]);

 

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per=100&page=1&sparkline=false')
      .then(res => {
      setMarket(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err));
  },[]);

  return(
    <div className="ui">
      <Navigation />
      <div className="ui massive container">
        <MarketTable market={market} passPortListUp={passPortListUp}/>
      </div>
    </div>
  )
}

export default Market;