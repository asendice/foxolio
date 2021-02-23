import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return(
    <div className="ui huge borderless stackable menu">
      <div className="item">
        <h2>foxolio</h2>
      </div>
      <Link className="active item nav-links" to="/"><h3>home</h3></Link>
      <Link className="item " to="/market"><h3>market</h3></Link>
      <Link className="item" to="/portfolio"><h3 >portfolio</h3></Link>
      <div className="right menu">
        <div className="item">
          <button className="ui orange button">login</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation;