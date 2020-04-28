import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Beers from "./Beers.js";

class Home extends Component {
  render() {
    return (
      <div>
        <section className="home-section">
          <div>
            <img alt="beers" src="./images/beers.png"></img>
          </div>
          <Link to="/beers">
            <h1>All-beers</h1>
          </Link>
        </section>
        <section className="home-section">
          <div>
            <img alt="beers" src="./images/random-beer.png"></img>
          </div>
          <Link to="/random">
            <h1>Random beer</h1>
          </Link>
        </section>
        <section className="home-section">
          <div>
            <img alt="beers" src="./images/new-beer.png"></img>
          </div>
          <h1>New-beer</h1>
        </section>
    
      </div>
   
    );
  }
}

export default Home;
