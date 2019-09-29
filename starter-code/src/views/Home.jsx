import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">All beers</Link>
        <br />
        <Link to="/random-beer">Random beer</Link>
        <br />
        <Link to="/new-beer">New beer</Link>
      </div>
    );
  }
}
