import React from "react";
import { Link } from "react-router-dom";
import AllBeers from "../assets/beers.png";
import RandomB from "../assets/random-beer.png";
import NewB from "../assets/new-beer.png";
import NewBeer from "./NewBeer";
function HomePage() {
  return (
    <div>
      <Link to="/beer">
        <img src={AllBeers} alt="allbeers" />
        <h3>All Beers</h3>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat
        temporibus, rerum, eius cum illum ab laborum exercitationem sapiente vel
        odit expedita excepturi dignissimos sint impedit. Velit atque ab
        dignissimos?
      </p>

      <Link to="/random">
        <img src={RandomB} alt="random" />
        <h3>Random Beers</h3>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat
        temporibus, rerum, eius cum illum ab laborum exercitationem sapiente vel
        odit expedita excepturi dignissimos sint impedit. Velit atque ab
        dignissimos?
      </p>
      <Link to="/new-beer">
        <img src={NewB} alt="newbeer" />
        <h3>New Beer</h3>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat
        temporibus, rerum, eius cum illum ab laborum exercitationem sapiente vel
        odit expedita excepturi dignissimos sint impedit. Velit atque ab
        dignissimos?
      </p>
    </div>
  );
}

export default HomePage;
