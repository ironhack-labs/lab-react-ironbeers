import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
         <nav>
          <Link to="/">Home</Link>
          <Link to="/beers">Beers</Link>
          <Link to="/random">Random Beer</Link>
          <Link to="/newbeer">Add a Beer</Link>
        </nav>
      </div>
    )
  }
}
