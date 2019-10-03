import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <nav className="nav-style">
        <ul>
          <li>
            <Link to="/beers">Beers</Link>
          </li>
          <li>
            <Link to="/random-beer">Random Beers</Link>
          </li>
          <li>
            <Link to="/new-beer">New Beer</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
