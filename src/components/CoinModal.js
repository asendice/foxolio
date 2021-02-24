import React from 'react';
import {roundComma} from '../numbers/NumChanger';
import { Image, Modal } from 'semantic-ui-react';

const CoinModal = ({ theCoin, isOpen, setIsOpen }) => {

  console.log(theCoin);
  console.log(roundComma(theCoin.current_price));
  console.log(roundComma(4328473284));

  return(
    <div> 
      <Modal
        onClose={() => setIsOpen(false)}  
        open={isOpen}
      >
      <Modal.Header>
        <h1>{theCoin.name} </h1>
      </Modal.Header>
      <Modal.Content image>
        <Image size="small" src={theCoin.image} wrapped />
        <Modal.Description>
          <Modal.Header>{theCoin.symbol}</Modal.Header>
          <p></p>
          <p>last updated: {theCoin.last_updated}</p>
          <p>24hr percent: %{theCoin.price_change_percentage_24h}</p>
          <p>24hr price change: ${theCoin.price_change_24h}</p>
          <p>all time high: ${theCoin.ath}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div>
    
  )
}

export default CoinModal;