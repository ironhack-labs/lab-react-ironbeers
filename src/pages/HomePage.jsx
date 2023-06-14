import React from "react";
import { Link } from "react-router-dom";
import AllBeersimg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import { SiHomebrew } from "react-icons/si";

function HomePage() {
  return (
    <div className="beer-links">
      <nav className="navbar">
        <Link to={"/"}>
          <SiHomebrew className="home-icon" />
        </Link>
      </nav>
      <img src={AllBeersimg} alt="Beers" />
      <Link to={"/beers"}>All Beers</Link>
      <img src={randomBeerImg} alt=" random-beer" />

      <Link to={"/random-beer"}>Random Beers</Link>
      <img src={newBeerImg} alt="new-beer" />

      <Link to={"/new-beer"}>New Beer</Link>
    </div>
  );
}

export default HomePage;
