import React from 'react';
import Navigation from './Navigation';
import Wallpaper from './Wallpaper';
const Home = () => {
  return(
    <div>
    <div className="ui">
      <Navigation />
      <Wallpaper />
    </div>
    </div>
  )
}

export default Home;