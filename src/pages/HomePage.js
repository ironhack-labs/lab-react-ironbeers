import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randomBeerImg from '../assets/random-beer.png';



function HomePage() {
  return (
    <div className="HomePage">
         <ul className="listOfImages" style={{listStyle: "none"}}>
          <li>
            <Link to="/beers"><img src={beersImg} alt="beersImg"/>Beers</Link>
          </li>
          <li>
            <Link to="/new-beer"><img src={newBeerImg} alt="newBeerImg"/>New Beers</Link>
          </li>
          <li>
            <Link to="/random-beer"><img src={randomBeerImg} alt="randomBeerImg"/>Random Beers</Link>
          </li>
        </ul> 
    </div>
  );
}

export default HomePage;