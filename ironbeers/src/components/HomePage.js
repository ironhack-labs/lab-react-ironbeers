import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/beers">All Beers</Link>
        </div>
        <div>
          <Link to="/random-beer">Random Beer</Link>
        </div>
        <div>
          <Link to="/new-beer">New Beer</Link>
        </div>
      </div>
    );
  }
}