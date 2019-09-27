import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to={`/beers`}>All Beers</Link>
        </h2>
        <img src="/images/beers.png" alt="alt" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
          voluptate delectus, dolores error saepe perferendis alias optio
          sapiente repellat, ut quis! Perspiciatis iure blanditiis maiores
          fugiat magnam, deleniti repellat.
        </p>
        <h2>
          <Link to={`/random-beer`}>Random Beer</Link>
        </h2>
        <img src="/images/random-beer.png" alt="alt" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
          voluptate delectus, dolores error saepe perferendis alias optio
          sapiente repellat, ut quis! Perspiciatis iure blanditiis maiores
          fugiat magnam, deleniti repellat.
        </p>
        <h2>
          <Link to={`/beer`}>New Beer</Link>
        </h2>
        <img src="/images/new-beer.png" alt="alt" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
          voluptate delectus, dolores error saepe perferendis alias optio
          sapiente repellat, ut quis! Perspiciatis iure blanditiis maiores
          fugiat magnam, deleniti repellat.
        </p>
      </div>
    );
  }
}
