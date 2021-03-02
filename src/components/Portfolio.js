import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import CoinCard from './CoinCard';
import UserInfo from './UserInfo';
import {roundComma} from '../numbers/NumChanger';

const Portfolio = ({ portList }) => {
  const[portTotal, setPortTotal] = useState(0);
  const[listTotal] = useState([]);


  const passOverall = (transaction) => {
    const newList = listTotal;
    newList.push(transaction);
    let ids = newList.map(o => o.id);
    let filtered = newList.filter(({id}, index) => !ids.includes(id, index + 1));
    const arr = [];
    for(let i=0; i<filtered.length; i++){
      arr.push(filtered[i].total);
      const money = roundComma(arr.reduce((a,b) => a + b, 0));
      setPortTotal(money);
    }
  }
  
  return(
    <div>
      <Navigation />
      <div className="ui container">
        <UserInfo portTotal={portTotal} />
        <div className="ui three stackable cards link raised">
          {portList.map(coin => {
            if(portList.includes(coin.name)){
              return console.log(`already includes ${coin.name}`)
            }else{
              return( 
                <CoinCard
                  passOverall={passOverall}
                  coin={coin}
                 />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
export default Portfolio;


