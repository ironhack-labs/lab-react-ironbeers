import React, { Component } from 'react';

export class Homepage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <img src="/assets/beers.png" alt="beers" />
            <p>All Beers</p>
          </li>
          <li>
            <img src="/assets/random-beer.png" alt="random beers" />
            <p>Random Beer</p>
          </li>
          <li>
            <img src="/assets/new-beer.png" alt="new beers" />
            <p>New Beer</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
