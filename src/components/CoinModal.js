import React, { useState } from 'react';
import { Image, Modal } from 'semantic-ui-react';

const CoinModal = ({ isOpen, setIsOpen, modalOpen, modalClose, name, symbol, img, price, percent, allTimeHigh, lastUpdated, priceChange }) => {
  const [open, setOpen] = useState(false);
  
  return(
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        >
        <Modal.Header>
          <h1>{name} ${price}</h1>
        </Modal.Header>
        <Modal.Content image>
          <Image size="small" src={img} wrapped />
          <Modal.Description>
            <Modal.Header>{symbol.toUpperCase()}</Modal.Header>
            <p></p>
            <p>last updated: {lastUpdated}</p>
            <p>24hr percent: %{percent}</p>
            <p>24hr price change: ${priceChange}</p>
            <p>all time high: {allTimeHigh}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default CoinModal;