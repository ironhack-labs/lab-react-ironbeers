import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import beers from "./beers";
import randomBeer from "./randomBeer";
import newBeer from "./newBeer";

export class home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">
          <img src="./../images/beers.png" alt="" />
          <h1>All Beers</h1>
        </Link>
        <Link to="/random-beer">
          <img src="./../images/random-beer.png" alt="" />
          <h1>Random Beer</h1>
        </Link>
        <Link to="/new-beer">
          <img src="./../images/new-beer.png" alt="" />
          <h1>New Beer</h1>
        </Link>
      </div>
    );
  }
}

export default home;
