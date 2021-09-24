import React from "react";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
import {Link} from 'react-router-dom';

const Home = props => {
  console.log(props);
  return (
    <div>
      <div>
        <img src={beersImg} alt="beers"/>
        <h1><Link to="/beers" class="header-text">All Beers</Link></h1>
      </div>
      <div>
        <img src={randomBeerImg} alt="random beer"/>
        <h1><Link to="/random-beer" class="header-text">Random Beer</Link></h1>
      </div>
      <div>
         <img src={newBeerImg} alt="new beer"/>
         <h1><Link to="/new-beer" class="header-text">New Beer</Link></h1>
      </div>
    </div>
  );
};

export default Home;