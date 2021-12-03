import React from "react";
import { Link } from "react-router-dom";
import beersImg from "./../assets/beers.png";
import beerImg2 from "./../assets/random-beer.png";
import beerImg3 from "./../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>

      <Link to="/beers">
        <div>
          <img src={beersImg} alt="beers" />
          <h2>All Beers</h2>
          <p>See All beers</p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <img src={beerImg2} alt="beers" />
          <h2>Random Beer</h2>
          <p>Discover a random beer</p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
          <img src={beerImg3} alt="beers" />
          <h2>Add New Beer</h2>
          <p>Add your favorite beer</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
