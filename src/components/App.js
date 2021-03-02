import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Market from './Market';
import Portfolio from './Portfolio';

const App = () => {
  const [portList, setPortList] = useState([]);

  const passPortListUp = (selected) => {
    const list = portList;
    if(list.some(obj => obj.id === selected.id)){
      console.log(`${selected.id} already exists...`)
    }else{
      list.push(selected);
      setPortList(list);
    }
    console.log(portList);
  }

  return(
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/market" exact render={() => <Market passPortListUp={passPortListUp} />} /> 
          <Route path="/portfolio" exact render={() => <Portfolio portList={portList} />}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;