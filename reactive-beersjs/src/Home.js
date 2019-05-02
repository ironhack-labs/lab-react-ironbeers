import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/beers">
          <div>
            <h2>All beers</h2>
          </div>
        </Link>
        <Link to="/random">
          <div>
            <h2>Random beer</h2>
          </div>
        </Link>
        <Link to="/new">
          <div>
            <h2>Add new beer</h2>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}
