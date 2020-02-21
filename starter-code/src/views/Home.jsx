import React from "react";
import {Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <Link className="main-link" exact to="/beers">
          <img src="../../images/beers.png" alt="beers"></img>
          <div>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptates! Saepe maxime fugiat, nobis odit nisi soluta, ut perspiciatis consequuntur, minus assumenda unde dolores?</p> 
          </div>
      </Link>

      <Link className="main-link" to="/random-beer">
          <img src="../../images/random-beer.png" alt="random-beer"></img>
          <div>
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptates! Saepe maxime fugiat, nobis odit nisi soluta, ut perspiciatis consequuntur, minus assumenda unde dolores?</p>
          </div>
      </Link>

      <Link className="main-link" to="/new-beer">
          <img src="../../images/new-beer.png" alt="new-beer"></img>
          <div>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptates! Saepe maxime fugiat, nobis odit nisi soluta, ut perspiciatis consequuntur, minus assumenda unde dolores?</p>
          </div>
      </Link>
    </div>
  );
}