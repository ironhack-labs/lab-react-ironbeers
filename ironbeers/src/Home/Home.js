import React from "react";
import { Link } from "react-router-dom";
import AllBeersPict from "../img/beers.png";
import RandomBeerPict from "../img/random-beer.png";
import NewBeerPict from "../img/new-beer.png";

const Home = () => {
  return (
    <nav>
      <ul className="Home">
        <li>
          <img src={AllBeersPict} alt="All Beers" />
          <Link to="/beers">All beers</Link>
        </li>
        <li>
          <img src={RandomBeerPict} alt="All Beers" />
          <Link to="/random-beer">Random Beer</Link>
        </li>
        <li>
          <img src={NewBeerPict} alt="All Beers" />
          <Link to="/new-beer">New Beer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
