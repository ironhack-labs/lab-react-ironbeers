import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/beers">AllBeers</Link>
          <img src="./images/barra.jpeg" />
        </div>
        <div>
          <Link to="/new-beer">NewBeer</Link>
          <img src="./images/cerveza.jpeg" />
        </div>
        <div>
          <Link to="/random-beer">RandomBeer</Link>
          <img src="./images/grifo.jpeg" />
        </div>
      </div>
    );
  }
}

export default Home;
