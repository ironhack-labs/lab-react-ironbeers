import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewBeer extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">
            <img src="/assets/home-white.png" alt="home"/>
          </Link>
        </header>
        <div>
          <h1>Get the newest stuff</h1>
        </div>
      </>
    );
  }
}
