import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Ironbeers React Training</h1>
      <p className="homepage__subtitle">
        Welcome to Ironbeers! Click on the links below to check out our beers:
      </p>
      <div className="homepage__links">
        <img src={beersImg} alt="Beers" className="homepage__link-image" />
        <ul className="homepage__links-list">
          <li className="homepage__link-item">
            <Link to="/beers" className="homepage__link">
              All Beers
            </Link>
            <p className="homepage__link-description">Click above to see our great selection of beers</p>
          </li>
        </ul>
        <img src={randomBeerImg} alt="Random-Beer" className="homepage__link-image" />
        <ul className="homepage__links-list">
          <li className="homepage__link-item">
            <Link to="/random-beer" className="homepage__link">
              Random Beer
            </Link>
            <p className="homepage__link-description">Interested in finding out about one of our drinks? Click above to find out about one of our beers </p>
          </li>
        </ul>
        <img src={newBeerImg} alt="New-Beer" className="homepage__link-image" />
        <ul className="homepage__links-list">
          <li className="homepage__link-item">
            <Link to="/new-beer" className="homepage__link">
              New Beer
            </Link>
            <p className="homepage__link-description">Want to add something new to our roster? Click above to add a new beer</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
