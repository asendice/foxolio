import React, {useState, useEffect}from 'react';

const Transaction = ({trans}) => {
  const[action, setAction] = useState('Buy');

  useEffect(() => {
    if(trans.buy === false){
      setAction('Sell')
    } 
  },[trans.buy])
  console.log(trans);
  return(
    <div className="ui card">
      <div className="content">
        <div className="header">
          {trans.name}
        </div>
        <div className="description">
          <h1>{action}</h1>
          <span>{trans.price}</span>
          <span>{trans.total}</span>
          <span>{trans.amt}</span>
          <span>{trans.date}</span>
        </div>
      </div>
      {trans.amt}
    </div>
  )
}

export default Transaction;