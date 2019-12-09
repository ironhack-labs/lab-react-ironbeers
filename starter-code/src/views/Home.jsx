import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/beers'>
          <img src='./images/beers.png' alt='' />
        </Link>
        <h1>All Beers</h1>
        <Link to='/new-beer'>
          <img src='./images/new-beer.png' alt='' />
        </Link>
        <h1>New Beer</h1>
        <Link to='/randombeer'>
          <img src='./images/random-beer.png' alt='' />
        </Link>
        <h1>Random Beer</h1>
      </div>
    );
  }
}

export default Home;
