import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="homecont">
        <div className="allbeers">
          <Link to="/allbeers">
            <img src="./beers.png" />
            <h1>All Beers</h1>
          </Link>
        </div>
        <div className="randombeer">
          <Link to="/randombeer">
            <img src="./new-beer.png" />
            <h1>Random Beer</h1>
          </Link>
        </div>
        <div className="newbeer">
          <Link to="/newbeer">
            <img src="./random-beer.png" />
            <h1>New Beer</h1>
          </Link>
        </div>
      </div>
    );
  }
}
