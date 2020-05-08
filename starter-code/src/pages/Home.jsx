import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <p>After a week of React, we could probably all use a beer.</p>
        <p>Find your favorite brew, here.</p>
        <h2>IronBeers</h2>
        <Link to="/all">View All Beers</Link>
      </div>
    );
  }
}
