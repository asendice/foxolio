import React, { useState, useEffect } from 'react';
import {roundComma} from '../numbers/NumChanger';
import { Modal , Image , Form, TextArea } from 'semantic-ui-react';

const PortCoinModal = ({ coin, isOpen, setIsOpen, passOverall, createRecentTrans, grabQty}) => {
  const[qty, setQty] = useState(0);
  const[amt, setAmt] = useState(0);
  const[note, setNote] = useState('');
  const[buy, setBuy] = useState(true);

  useEffect(() => {
      const transaction = {
        id: coin.id,
        name: coin.name,
        price: coin.price,
        total: coin.price * qty,
        amt: amt,
        date: date,
        time: time,
        note: note,
        buy: buy
      }
      if(transaction.total == 0){
       setIsOpen(false);
       console.log('total is 0')
      }else{
        createRecentTrans(transaction)
        passOverall(transaction);
        grabQty(qty);
      }
      setIsOpen(false);
  }, [qty])
  

  const onBuySubmit = (e) => {
    e.preventDefault();
    setQty(qty => qty + Number(amt));
  }

  const onSellSubmit = (e) => {
    e.preventDefault();
    if(qty <= 0 || qty - Number(amt) <= 0){
      alert("Can't have negative coins dumbass")
      setQty(0);
    }else{
      setQty(qty => qty - Number(amt));
    }
    setBuy(false);
  }

  const today = new Date();
  const date = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const price_rc = roundComma(coin.price);
  const total_rc = roundComma(coin.price * qty);
  // onFormSubmit();


  return(
    <>
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      size='small'>
      <Modal.Header>
        Enter Trade for {coin.name}
        <Image  className="right floated avatar" src={coin.image}/>
        </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
          <Form.Field>
            <div className="ui segment">
              {coin.name} current price: ${price_rc}
              <div>
                your total: {total_rc}
              </div>
            </div>
            </Form.Field>
            <div className="ui segment">
            <Form.Field>
              Date of trade: {date} 
            </Form.Field>
            <Form.Field>
              Time of trade: {time}
            </Form.Field>
            </div>
            <Form.Field>
              <label>Amount: </label>
              <input onChange={(e) => setAmt(e.target.value)} value={amt}  placeholder="Enter Amount" type="text"  pattern="\d+((\.|,)\d+)?" />
            </Form.Field>
            <Form.Field>
              <label>Notes:  </label>
              <TextArea onChange={(e) => setNote(e.target.value)} rows={1} placeholder="Enter notes about your trade..." style={{ maxHeight: 60, minHeight: 60 }} />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <button onClick={onBuySubmit} className="ui green button">Buy</button>
        <button onClick={onSellSubmit} className="ui red button">Sell</button>
      </Modal.Actions>
    </Modal>
    </>
  )
}

export default PortCoinModal;


