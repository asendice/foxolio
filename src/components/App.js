import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Market from './Market';

const App = () => {

  const name = 'michael'; 
  const last = 'scott';

  console.log(`${name}` + ' ' +  `${last}`)

  // micahel scott


  return(
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/market" exact render={() => <Market />} /> 
        </Switch>
      </Router>
    </div>
  )
}

export default App;