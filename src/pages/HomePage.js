import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import aStein from "../assets/glass.png";
import bottlecap from '../assets/bottle-cap.png';
import aBeer from '../assets/beer.png';
import glass from '../assets/glass.png';

function HomePage() {
  return (

    <div className="home">
      <div className="heading">
        <h1> IronBeers</h1>
      </div> 
      <div className="headingLinks">
          <button><Link to="/beers"> ♾️ <br></br> <img src={bottlecap} alt="" /> </Link></button>

          <button><Link to="/random-beer"> 🔀  <br></br><img src={aBeer} alt="" /></Link></button>

          <button><Link to="/new-beer">  ➕ <br></br><img src={glass} alt="" /> </Link></button>
        </div> 
      <div className="mainStuff">
          <h1> Drink With Us.</h1>
          <img src={aStein} alt="ein Stein" />
          
      </div> 

    </div> //home
  );
}

export default HomePage;
