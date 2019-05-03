import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <Link to="/beer">SingleBeer</Link>
        </li>
        <li>
          <Link to="/ramdom-beer">Random-Beer</Link>
        </li>
        <li>
          <Link to="/new-beer">New-Beer</Link>
        </li> 
      </ul>
    );
  }
}
