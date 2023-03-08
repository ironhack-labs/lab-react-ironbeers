import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Ironbeers React Training</h1>
      <p>
        Welcome to Ironbeers! Click on the links below to check out our beers:
      </p>
      <div>
        <ul>
          <div>
            <img src='./assets/beers.png' alt='Beers' />
            <li>
              <Link to="/beers">All Beers</Link>
              <p> Click above to see our great selection of beers</p>
            </li>
          </div>
          <br></br>
          <div>
            <img src="./assets/random-beer.png" alt="Random-Beer" />
            <li>
              <Link to="/random-beer">Random Beer</Link>
              <p> Interested in finding out about one of our drinks? Click above to find out about one of our beers </p>
            </li>
          </div>
          <br></br>
          <div>
            <img src="./assets/new-beer.png" alt="New-Beer" />
            <li>
              <Link to="/new-beer">New Beer</Link>
              <p>Want to add something new to our roster? Click above to add a new beer</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
