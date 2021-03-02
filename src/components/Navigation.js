import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {

  return(
    <div className="ui huge borderless stackable menu">
      <div className="item">
        <h2>foxolio</h2>
      </div>
      <NavLink className="item" exact to="/"><h3>home</h3></NavLink>
      <NavLink className="item" exact to="/market"><h3>market</h3></NavLink>
      <NavLink className="item" exact to="/portfolio"><h3 >portfolio</h3></NavLink>
      <div className="right menu">
        <div className="item">
          <button className="ui orange button">login</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation;