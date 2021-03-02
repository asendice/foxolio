import React, { useState } from 'react';
import PortCoinModal from './PortCoinModal';
import {roundComma} from '../numbers/NumChanger';

const CoinCard = ({ coin, passOverall }) => {
  const[qty, setQty] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  return(
    <>
    <PortCoinModal isOpen={isOpen} setIsOpen={setIsOpen} coin={coin} qty={qty} setQty={setQty} passOverall={passOverall} />
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
          <div>qty owned: {qty} </div>
          <div className="right floated">total in usd: ${roundComma(qty * coin.price)} </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default CoinCard;