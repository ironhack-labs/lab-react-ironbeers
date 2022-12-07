import beersImg from "../assets/beersImg.png";
import randomBeerImg from "../assets/randomBeerImg.png";
import newBeerImg from "../assets/newBeerImg.png";
import { Link } from "react-router-dom";
import React from "react";

function Home () {
  return (
    <>

      <Link to={`/beers`}>
      <img src={beersImg} alt="beers" />
        <h1>All Beers</h1>
      <p>Check all our beers</p>
      </Link>


      <Link to={`/random-beer`}>
      <img src={randomBeerImg} alt="randombeer" />
        <h1>Random Beer</h1>
      <p>Pick a random beer</p>
      </Link>


      <Link to={`/new-beer`}>
      <img src={newBeerImg} alt="newbeer" />
        <h1>New Beer</h1>
      <p>Add a new beer</p>
      </Link>
    </>
  );
};

export default Home;