import React from "react";
import { Link } from 'react-router-dom';
import beersPic from '../../assets/beers.png';
import randomB from '../../assets/random-beer.png';
import newBeer from '../../assets/new-beer.png';

function HomeScreen() {
  return ( 
    <div className="container">
      <div >
        <img src={beersPic} alt="beers"/>
        <p>hf w`pifvk `pi s´dfkñ `wgip mgv `wipegf skg w`p </p>
        <Link to="/beers">Go to beer's list</Link>
      </div>
      <div >
        <img src={randomB} alt="random"/>
        <p>hf w`pifvk `pi s´dfkñ `wgip mgv `wipegf skg w`p </p>
        <Link to="/beers/random">Get random beer</Link>
      </div>
      <div >
        <img src={newBeer} alt="new"/>
        <p>hf w`pifvk `pi s´dfkñ `wgip mgv `wipegf skg w`p </p>
        <Link to="/new">Create new beer</Link>
      </div>
    </div>
   )
}

export default HomeScreen;