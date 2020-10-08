import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class AllBeers extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>All beer</h1>
        <Link to="/beers">Beers</Link>
      </div>
    );
  }
}

export default AllBeers;
