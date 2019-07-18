import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default class Home extends Component {
  render() {
    return (
      <div>
          <NavBar />
        <Link to={"/allBeers"}>
          {" "}
          <img src="img/beers.png" alt="beers" width="400" />
          <h2>All Beers</h2>
          <p>Bla bla blaBla bla blaBla bla blaBla bla blaBla bla bla</p>
        </Link>
        <Link to={"/newBeer"}>
          {" "}
          <img src="img/new-beer.png" alt="beers" width="400" />
          <h2>New Beer</h2>
          <p>Bla bla blaBla bla blaBla bla blaBla bla blaBla bla bla</p>
        </Link>
        <Link to={"/randomBeer"}>
          {" "}
          <img src="img/random-beer.png" alt="beers" width="400" />
          <h2>Random Beer</h2>
          <p>Bla bla blaBla bla blaBla bla blaBla bla blaBla bla bla</p>
        </Link>
      </div>
    );
  }
}
