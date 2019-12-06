import React, { Component } from "react";
import { Link } from "react-router-dom";
import EachBeer from "./EachBeer/EachBeer";


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="all-beers">
          <div className="beers">
            <img src="./images/beers.png"></img>
            <h2>All Beers</h2>
            <Link to="/beers"></Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="new-beer">
            <img src="./images/new-beer.png"></img>
            <h2>new Beer</h2>
            <Link to="/new-beer"></Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="random-beer">
            <img src="./images/random-beer.png"></img>
            <h2>Random Beer<Link to="/random-beer"></Link></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
