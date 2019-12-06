import React from "react";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <div>
      <Link to={`/`}>
        <div>
          <img src="./images/beers.png" alt="diferent beers" />
          <h3>All Beers</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Link>
      <Link to={`/newBeer`}>
        <div>
          <img src="./images/new-beer.png" alt="diferent beers" />
          <h3>New Beer</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Link>
      <Link to={`/RandomBeer`}>
        <div>
          <img src="./images/random-beer.png" alt="diferent beers" />
          <h3>Random Beer</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Link>
    </div>
  );
};
export default homePage;
