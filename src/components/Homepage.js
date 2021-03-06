import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Homepage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/beers">
              <img src="/assets/beers.png" alt="beers" />
              <p>All Beers</p>
            </Link>
          </li>
          <li>
            <Link to="/random-beer">
              <img src="/assets/random-beer.png" alt="random beers" />
              <p>Random Beer</p>
            </Link>
          </li>
          <li>
            <Link to="/new-beer">
              <img src="/assets/new-beer.png" alt="new beers" />
              <p>New Beer</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
