import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">New Beer</Link>
        <Link to="/create-new-beer">Create New Beer</Link>
      </div>
    );
  }
}
