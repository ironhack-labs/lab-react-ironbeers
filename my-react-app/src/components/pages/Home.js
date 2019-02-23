import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/beers">All Beers</Link>
        <br/>
        <Link to="/random-beer">Random Beers</Link>
        <br/>
        <Link to="/new-beer">New Beers</Link>
      </div>
    )
  }
}