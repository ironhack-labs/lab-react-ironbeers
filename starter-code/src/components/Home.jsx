import React from "react";
import beers from "../images/beers.png";
import rbeers from "../images/random-beer.png";
import nbeers from "../images/new-beer.png";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <img src={beers} alt="broken" height="100px"></img>
      <h3>
        <Link to={"/beers"}> All Beers</Link>
      </h3>
      <img src={rbeers} alt="broken" height="100px"></img>
      <h3>
        <Link to="/random-beer">Random Beer</Link>
      </h3>
      <img src={nbeers} alt="broken" height="100px"></img>
      <h3>
        <Link to="/new-beer">New Beer</Link>
      </h3>
    </div>
  );
};

export default Home;
