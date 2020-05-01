import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <HomeHeader />

          <Link to="/beers">
            <img src="/images/beers.png" alt="beers" />
          </Link>
          <h1>All Beers</h1>
          <p>
            Enim dolore et sunt cupidatat pariatur Lorem elit tempor excepteur
            Lorem occaecat eu deserunt cupidatat. Fugiat Lorem ex laborum
            commodo. Dolore eiusmod consequat laboris esse ad ut adipisicing
            fugiat sint. Est pariatur deserunt amet culpa eu et quis. Enim do
            dolor sunt dolor magna esse deserunt ea magna esse tempor.
          </p>
        </div>
        <div>
          <Link to="/new-beer">
            <img src="/images/new-beer.png" alt="new beer" />
          </Link>
          <h1>New Beer</h1>
          <p>
            Enim dolore et sunt cupidatat pariatur Lorem elit tempor excepteur
            Lorem occaecat eu deserunt cupidatat. Fugiat Lorem ex laborum
            commodo. Dolore eiusmod consequat laboris esse ad ut adipisicing
            fugiat sint. Est pariatur deserunt amet culpa eu et quis. Enim do
            dolor sunt dolor magna esse deserunt ea magna esse tempor.
          </p>
        </div>
        <div>
          <Link to="/random-beer">
            <img src="/images/random-beer.png" alt="random beer" />
          </Link>
          <h1>Random Beer</h1>
          <p>
            Enim dolore et sunt cupidatat pariatur Lorem elit tempor excepteur
            Lorem occaecat eu deserunt cupidatat. Fugiat Lorem ex laborum
            commodo. Dolore eiusmod consequat laboris esse ad ut adipisicing
            fugiat sint. Est pariatur deserunt amet culpa eu et quis. Enim do
            dolor sunt dolor magna esse deserunt ea magna esse tempor.
          </p>
        </div>
      </div>
    );
  }
}
