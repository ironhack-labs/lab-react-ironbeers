import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="home">
          <ul>
            <li>
              <img src="/images/beers.png" alt="All Beers"></img>
              <Link to="/all">All Beers</Link>
            </li>
            <li>
              <img src="/images/random-beer.png" alt="All Beers"></img>
              <Link to="/random">Random Cervezote</Link>
            </li>
            <li>
              <img src="/images/new-beer.png" alt="All Beers"></img>
              <Link to="/new">New Beer</Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
