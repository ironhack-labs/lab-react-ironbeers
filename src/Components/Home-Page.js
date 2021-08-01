import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newbeer from "../assets/new-beer.png"
import randombeer from "../assets/random-beer.png"

const HomePage = () => {
  return (
   
    <ul id="home">
      <img className='m-3' src={beers} alt= "beers"/>
      <br />
      <Link to="/beers">Beers</Link>
      <br />
      <img className='m-3' src={newbeer} alt= "new-beer"/>
      <br />
      <Link to="/new-beer">New Beer</Link>
      <br />
      <img className='m-3' src={randombeer }alt= "random-beer"/>
      <br />
      <Link to="/random">Random Beer</Link>
      <br />
    </ul>
  );
};

export default HomePage;
