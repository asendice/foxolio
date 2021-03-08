import React, { useState, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Transaction from './Transaction';
import Navigation from './Navigation';
import CoinCard from './CoinCard';
import UserInfo from './UserInfo';
import {roundComma} from '../numbers/NumChanger';
import fox from '../images/fox.png';
import axios from 'axios';

const Portfolio = ({ portList }) => {
  const[portTotal, setPortTotal] = useState(0);
  const[listTotal] = useState([]);
  const[transList, setTransList] = useState([]);
  const[quant, setQuant] = useState(0)


  const passOverall = (transaction) => {
    setQuant(transaction.qty)
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
  
  const createRecentTrans = (transaction) => {
    console.log(transaction)
    const tList = transList;
   if(transaction.amt > 0){
     tList.push(transaction);
    setTransList(tList);
   }
   console.log(transList);
  }


  return(
    <div>
      <Navigation />
      <div className="ui container">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image  src={fox}/>
            </Grid.Column>
            <Grid.Column width={13}>
              <UserInfo portTotal={portTotal}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
            <h3>Wallet</h3>
            <hr />
            <div className="ui two stackable cards link raised">
              {portList.map(coin => {
                if(portList.includes(coin.name)){
                  return console.log(`already includes ${coin.name}`)
                  }else{
                    return( 
                    <CoinCard
                      qty={quant}
                      createRecentTrans={createRecentTrans}
                      passOverall={passOverall}
                      coin={coin}
                    />
                   )
                  }
                })}
             </div>
            </Grid.Column>
            <Grid.Column width={6}>
                <h3>Recent Transactions</h3>
                <hr />
                {transList.map(trans => {
                  console.log(trans)
                  if(trans){
                    return (
                      <Transaction trans={trans} />
                    )
                  }
                })}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            
          </Grid.Row>
        </Grid>
      
      </div>
    </div>
  )
}
export default Portfolio;


