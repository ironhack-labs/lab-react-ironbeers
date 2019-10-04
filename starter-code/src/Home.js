import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/AllBeers">
          <img src="/images/beers.png" alt="beers" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </Link>
        
        <Link to="/randomBeer">
          <img src="/images/random-beer.png" alt="beers" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy cazzo invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At porco eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </Link>
      </div>
    );
  }
}
