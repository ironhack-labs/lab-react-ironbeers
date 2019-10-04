import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Link to={`/beers`}>
          <img src="./images/beers.png" alt="All Beers" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            nisi turpis. Praesent sed eros sed est pellentesque semper.
            Vestibulum turpis arcu, maximus eu pellentesque vel, suscipit eu
            arcu.
          </p>
        </Link>

        <Link to={`/random-beer`}>
          <img src="./images/new-beer.png" alt="New Beers" />
          <h2>Random Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            nisi turpis. Praesent sed eros sed est pellentesque semper.
            Vestibulum turpis arcu, maximus eu pellentesque vel, suscipit eu
            arcu.
          </p>
        </Link>

        <Link to={`/new-beer`}>
          <img src="./images/random-beer.png" alt="Random Beers" />
          <h2>New Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            nisi turpis. Praesent sed eros sed est pellentesque semper.
            Vestibulum turpis arcu, maximus eu pellentesque vel, suscipit eu
            arcu.
          </p>
        </Link>
      </div>
    );
  }
}
