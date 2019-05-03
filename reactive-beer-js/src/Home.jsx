import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/all">All Beers</Link>
        </li>
        <li>
          <Link to="/random">Random Beer</Link>
        </li>
        <li>
          <Link to="/new">New Beer</Link>
        </li>
      </ul>
    );
  }
}
