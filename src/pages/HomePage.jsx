import React from "react";
import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <Link to='/beers'>
        <img src={Beers} alt='beers list' />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          asperiores ipsa repellat cumque facere id omnis libero, dolorum
          quibusdam adipisci, modi dolor non hic. Fugit quia dolorum voluptates
          sit doloremque?
        </p>
      </Link>
      <Link to='/random-beer'>
        <img src={RandomBeer} alt='get random beer' />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          asperiores ipsa repellat cumque facere id omnis libero, dolorum
          quibusdam adipisci, modi dolor non hic. Fugit quia dolorum voluptates
          sit doloremque?
        </p>
      </Link>
      <Link to='/new-beer'>
        <img src={NewBeer} alt='create new beer' />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          asperiores ipsa repellat cumque facere id omnis libero, dolorum
          quibusdam adipisci, modi dolor non hic. Fugit quia dolorum voluptates
          sit doloremque?
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
