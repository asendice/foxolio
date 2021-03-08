import React from 'react';
import {roundComma, convertMc} from '../numbers/NumChanger';
import { Image, Modal, Grid, Label } from 'semantic-ui-react';

const CoinModal = ({ theCoin, isOpen, setIsOpen, passPortListUp }) => {


  const onAddItem = (event) => {
    event.preventDefault();
    const obj = {
      id: theCoin.name,
      name: theCoin.name,
      price: theCoin.current_price,
      image: theCoin.image,
      symbol: theCoin.symbol
    }
    setIsOpen(false);
    passPortListUp(obj);
  }

  return(
    <div> 
      <Modal
        onClose={() => setIsOpen(false)}  
        open={isOpen}
      >
      <Modal.Header>
        <div className="ui">
          <h1>{theCoin.name} </h1>
          <Label>{theCoin.symbol}</Label>
          <div className="ui right floated" style={{color: (theCoin.price_change_percentage_24h) >= 0 ? "green" : "red"}}>{roundComma(theCoin.price_change_percentage_24h)}%</div>
        </div>
      </Modal.Header>
      <Modal.Content image>
        <Image size="small" src={theCoin.image} wrapped />
        <Modal.Description>
          <Modal.Header>
            <div className="ui statistic">
              <div className="value">$  {roundComma(theCoin.current_price)}</div>
              <div className="label">{theCoin.name} ({theCoin.symbol}) current price</div>
            </div>
          </Modal.Header>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <i className="ui icon dollar sign"/>
                <div>Market Cap: ${convertMc(theCoin.market_cap)}</div>
                <span></span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* <p></p>
          <p>last updated: {theCoin.last_updated}</p>
          <p>24hr percent: {theCoin.price_change_percentage_24h}%</p>
          <p>24hr price change: ${roundComma(theCoin.price_change_24h)}</p>
          <p>all time high: ${roundComma(theCoin.ath)}</p> */}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <button
          onClick={onAddItem}
          className="ui orange button">Add to portfolio?</button>
      </Modal.Actions>
    </Modal>
    </div>
    
  )
}

export default CoinModal;