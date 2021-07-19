import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">
            <img src="/assets/home-white.png" alt="home"/>
          </Link>
        </header>
        <div>
          <h1>Enjoy the randomness</h1>
        </div>
      </>
    );
  }
}
