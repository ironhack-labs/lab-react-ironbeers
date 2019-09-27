import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", margin: "20px 0" }}
      >
        <Link to="/beers" className="link-to-beers">
          <img src="/images/beers.png" alt="beers" />
          <h1>Beers</h1>
        </Link>
        <Link to="/new-beer/" className="link-to-beers">
          <img src="/images/new-beer.png" alt="new-beer" />
          <h1>New Beer</h1>
        </Link>
        <Link to="/random-beer" className="link-to-beers">
          <img src="/images/random-beer.png" alt="random-beer" />
          <h1>Random Beer</h1>
        </Link>
      </div>
    );
  }
}
