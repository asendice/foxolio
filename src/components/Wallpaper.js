import React from 'react';
import fox from '../images/fox.png';
import marketGraph from '../images/market-graph.png';

const Wallpaper = () => {
  return(
    <div>
        <div className="ui two column very relaxed stackable grid raptor-wp">
          <div className="middle aligned column">
            <img 
            className="ui large image fox-img"
            src={fox}
            />
          </div>
          <div className="middle aligned column">
            <h1>foxolio</h1>
            <h2>
              The world's least popular Bitcoin & crypto currency portfolio tracker.
              Totaling 2 users, makes foxolio the least trusted platform for staying connected
              to the cryptocurrency ecosystem. Ensured to be the least effective way to discover,
              track, and manage your cryptocurrency investments. Get started with <a>foxolio</a> today!
            </h2>
          </div>
         </div>
      <div className="ui two column very relaxed stackable grid market-wp">
        <div className="middle aligned column">
          <h1>market</h1>
          <h2>
            Check out foxolio's market where you can search for up to 100 of the most popular 
            crypto currencies in the world. There you can find information regarding price, market 
            cap, percent gain, etc. 
          </h2>
          <button className="ui primary button"> market </button>
        </div>
        <div className=" middle aligned column">
          <img 
            className="ui large rounded image"
            src={marketGraph}
          />
        </div>
      </div>
    </div>
  )
}

export default Wallpaper;