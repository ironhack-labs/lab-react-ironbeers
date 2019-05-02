import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="Navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/beers">All Beers</Link></li>
        <li><Link to="/random-beer">Random Beer</Link></li>
        <li><Link to="/new-beer">New Beer</Link></li>
      </ul>
    )
  }
}
