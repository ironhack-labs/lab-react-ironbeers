import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  return (
    <div>
      <Link className="link" to={"/beers"}>
        <div>
          <img className="img" src="./images/beers.png" alt="All Beers" />
          <div className="container">
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Link>
      <Link className="link" to={"/random-beer"}>
        <div>
          <img
            className="img"
            src="./images/random-beer.png"
            alt="Random Beers"
          />
          <div className="container">
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Link>
      <Link className="link" to={"/new-beer"}>
        <div>
          <img className="img" src="./images/new-beer.png" alt="New Beer" />
          <div className="container">
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
