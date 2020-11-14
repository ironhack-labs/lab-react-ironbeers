import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">All Beers</Link>
        <Link to="/beers/random">Random Beer</Link>
        <Link to="/new-beer">New Beer</Link>
      </div>
    );
  }
}

export default Home;
