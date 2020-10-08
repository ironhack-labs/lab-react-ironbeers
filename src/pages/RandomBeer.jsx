import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


class RandomBeer extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Random beer</h1>
        <Link to="/beers">Beers</Link>
      </div>
    );
  }
}

export default RandomBeer;
