import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css"
import beers from "../assets/beers.png"
import NewBeer from "../assets/new-beer.png"
import RandomBeer from "../assets/random-beer.png"
const Home = () => {
  return (
    <nav className="Navbar">
      <div>
        <img src={beers} alt="" />
        <br />
        <Link to={`/beers`}>All Beers</Link>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
      <div>
        <img src={RandomBeer} alt="" />
        <br />
        <Link to={`/random-beer`}>Random Beer</Link>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
      <div>
        <img src={NewBeer} alt="" />
        <br />
        <Link to={`/new-beer`}>New Beer</Link>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
    </nav>
  );
};

export default Home;
