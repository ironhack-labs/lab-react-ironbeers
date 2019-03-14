import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render () {
    return (
      <ul>
        <li><Link to={'/beers'}>Beers</Link></li>
        <li><Link to={'/random-beer'}>Random beer</Link></li>
        <li><Link to={'/new-beer'}>New beer</Link></li>  
      </ul>
    )
  }
}

export default Home;