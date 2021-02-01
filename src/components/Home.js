import React from 'react';
import {
  Link,
} from "react-router-dom";
import allBeersImg from '../assets/all-beers.jpg';
import randomBeerImg from '../assets/random-beer.jpg';
import newBeerImg from '../assets/new-beer.jpg';

export default function Home() {
  return (
    <div>
      <div>
        <img src={allBeersImg} alt="all beers" />
        <Link to="/beers">All Beers</Link>
        <p>lorem ipsum</p>
      </div>
      <div>
        <img src={randomBeerImg} alt="random beer" />
        <Link to="/random-beer">Random Beer</Link>
        <p>lorem ipsum</p>
      </div>      
      <div>
        <img src={newBeerImg} alt="new beer" />
        <Link to="/new-beer">New Beer</Link>
        <p>lorem ipsum</p>
      </div>           
    </div>
  )
}
