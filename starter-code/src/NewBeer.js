import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class NewBeer extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <Link to="/">
              <img src="../images/home.png" alt="home" className="img-home"/>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NewBeer;
