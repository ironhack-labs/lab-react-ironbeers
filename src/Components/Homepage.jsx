import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Ironbeers React Training</h1>
      <p className="homepage__subtitle">
        Welcome to Ironbeers! Click on the links below to check out our beers:
      </p>
      <div className="homepage__links">
        <ul className="homepage__links-list">
          <li className="homepage__link-item">
            <Link to="/beers" className="homepage__link">
              <img src='./assets/beers.png' alt='Beers' className="homepage__link-image" />
              All Beers
            </Link>
            <p className="homepage__link-description">Click above to see our great selection of beers</p>
          </li>

          <li className="homepage__link-item">
            <Link to="/random-beer" className="homepage__link">
              <img src="./assets/random-beer.png" alt="Random-Beer" className="homepage__link-image" />
              Random Beer
            </Link>
            <p className="homepage__link-description">Interested in finding out about one of our drinks? Click above to find out about one of our beers </p>
          </li>

          <li className="homepage__link-item">
            <Link to="/new-beer" className="homepage__link">
              <img src="./assets/new-beer.png" alt="New-Beer" className="homepage__link-image" />
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
