
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import beersImg from "/src/assets/beers.png"
import randomBeerImg from "/src/assets/random-beer.png"
import newBeerImg from "/src/assets/new-beer.png"




function HomePage() {}

return (
    <div className="HomePage">
    <Link to="/beers">
      <h3>All Beers 🍻</h3>
      <img src={Beers} />
    </Link>
      <p>
        Discover the best beer!
      </p>
    <Link to="/random-beer">
      <h3>Random Beer</h3>
      <img src={RandomBeer} />
    </Link>
      <p>Suprise yourself with the random beer option</p>
    <Link to="/new-beer">
      <h3>New Beer</h3>
      <img src={NewBeer} />
    </Link>
      <p>BSee our latest beers in our portfolio</p>
  </div>
);

export default HomePage;
