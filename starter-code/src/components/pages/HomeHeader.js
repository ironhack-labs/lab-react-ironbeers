import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BeerList extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-link">
          <Link to="/">
            <img
              src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
              alt="Home"
            />
          </Link>
        </div>
      </div>
    );
  }
}
