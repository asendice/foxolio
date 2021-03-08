import React, { useState } from 'react';
import PortCoinModal from './PortCoinModal';
import {roundComma} from '../numbers/NumChanger';

const CoinCard = ({ coin, passOverall, createRecentTrans, qty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const[num, setNum] = useState(0);
  const grabQty = (qty) => {
    setNum(qty);
  }
  
  return(
    <>
    <PortCoinModal grabQty={grabQty} isOpen={isOpen} setIsOpen={setIsOpen} coin={coin}  passOverall={passOverall} createRecentTrans={createRecentTrans} />
    <div key={coin.id} onClick={() => setIsOpen(true)} className="card">
      <div className="content">
        <img className="right floated mini ui image" alt={coin.name} src={coin.image}/>
        <div className="header">
          {coin.name}
        </div>
        <div className="meta">
          {coin.symbol.toUpperCase()}
        </div>
        <div className="description">
          ${roundComma(coin.price)}
        </div>
        <div className="extra content">
          <div>qty owned: {num} </div>
          <div className="right floated">total in usd: ${roundComma(num * coin.price)} </div>
        </div>
      </div>
    </div>
  </>
  );
}
export default CoinCard;