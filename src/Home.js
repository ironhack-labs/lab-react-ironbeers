import React from "react";
import { Link } from "react-router-dom";
import Beers from "./assets/beers.png";
import NewBeer from "./assets/new-beer.png";
import RandomBeer from "./assets/random-beer.png";
import "./App.css";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <img src={Beers} alt="all-beer-thumbnail" className="thumbnail" />
        </div>
        <Link to="/beers" className="title">
          All Beers
        </Link>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div>
        <div>
          <img
            src={RandomBeer}
            alt="random-beer-thumbnail"
            className="thumbnail"
          />
        </div>
        <Link to="/random-beer" className="title">
          Random beers
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div>
        <div>
          <img src={NewBeer} alt="new-beer-thumbnail" className="thumbnail" />
        </div>
        <Link to="/new-beer" className="title">
          New beers
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
    </>
  );
};

export default Home;
