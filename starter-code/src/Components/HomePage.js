import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment> 
        <Link to={"/beers"}>
          <img src="/images/beers.png" alt="beers" />
          <h2>All Beers</h2>
        </Link>
        <Link to={"/random-beer"}>
          <img src="/images/random-beer.png" alt="random-beer" />
          <h2>Random Beer</h2>
        </Link>
        <Link to={"/new-beer"}>
          <img src="/images/new-beer.png" alt="new-beer" />
          <h2>New Beer</h2>
        </Link>
      </React.Fragment>
    );
  }
}
