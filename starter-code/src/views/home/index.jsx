import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

// import AppRoutes from './../../routes';
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <img src="/images/beers.png" />
          <Link to="/listbeers">List Beers</Link>
          <br></br>
          <img src="/images/random-beer.png" />
          <Link to="/randombeer">Random Beers</Link>
          <br></br>
          <img src="/images/new-beer.png" />
          <Link to="/addbeer">Add Beer</Link>
        </div>
      </div>
    );
  }
}

export default Home;
