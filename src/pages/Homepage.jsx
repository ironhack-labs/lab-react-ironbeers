import React from "react";
import Beers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <img src={Beers} alt="beers" />
      <Link to={"/beers"}>
        <h2>All Beers</h2>
      </Link>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        blanditiis nostrum pariatur laudantium ab mollitia rerum illo recusandae
        error sed placeat asperiores culpa nemo id quis, nisi eveniet porro eos.
      </p>
      <img src={NewBeer} alt="beers" />
      <Link to={"/newbeers"}>
      
      <h2>New Beers</h2></Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        blanditiis nostrum pariatur laudantium ab mollitia rerum illo recusandae
        error sed placeat asperiores culpa nemo id quis, nisi eveniet porro eos.
      </p>
      <img src={RandomBeer} alt="beers" />
      <Link to={"/randombeers"}>
      
      <h2>Random Beers</h2></Link>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        blanditiis nostrum pariatur laudantium ab mollitia rerum illo recusandae
        error sed placeat asperiores culpa nemo id quis, nisi eveniet porro eos.
      </p>
    </div>
  );
}

export default Homepage;
