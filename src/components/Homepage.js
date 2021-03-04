import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
export class Homepage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/beers">
              <img src="../assets/beers.png" alt="beer" />
            </Link>
          </li>
          <li>
            <Link to="/random-beer">
              <img src="../assets/random-beer.png" alt="random beer" />
            </Link>
          </li>
          <li>
            <Link to="/new-beer">
              <img src="../assets/new-beer.png" alt="new beer" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
