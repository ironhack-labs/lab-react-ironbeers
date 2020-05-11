import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>landing</h1>
        <Link to="/beers">All Beers</Link>
      </div>
    );
  }
}
