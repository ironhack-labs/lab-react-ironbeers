import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="title-container">
          <div className="home-links-container">
            <div className="anchor-container">
              <a href="/beers" className="home-anchor">
                List of beers
              </a>
            </div>
            <div className="anchor-container">
              <a href="/randomBeer" className="home-anchor">
                Choose a random beer
              </a>
            </div>
            <div className="anchor-container">
              <a href="/newBeer" className="home-anchor">
                Add a new beer
              </a>
            </div>
          </div>
          <h1 className="main-title">Welcome<br/>to Ironbeers!</h1>
        </div>
      </div>
    );
  }
}
