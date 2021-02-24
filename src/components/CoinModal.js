import React from 'react';
import { Image, Modal } from 'semantic-ui-react';

const CoinModal = ({ theCoin, isOpen, setIsOpen }) => {

  console.log(theCoin.name)

  return(
    <div> 
      <Modal
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
    <Modal.Header>
      <h1>{theCoin.name} ${theCoin.price}</h1>
    </Modal.Header>
    <Modal.Content image>
      <Image size="small" src={theCoin.img} wrapped />
      <Modal.Description>
        {/* <Modal.Header>{theCoin.symbol.toUpperCase()}</Modal.Header> */}
        <p></p>
        <p>last updated: {theCoin.lastUpdated}</p>
        <p>24hr percent: %{theCoin.percent}</p>
        <p>24hr price change: ${theCoin.priceChange}</p>
        <p>all time high: {theCoin.allTimeHigh}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    </div>
    
  )
}

export default CoinModal;