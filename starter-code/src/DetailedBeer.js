import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class DetailedBeer extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <Link to="/">
              <img src="../images/home.png" alt="home" className="img-home" />
            </Link>
          </div>
        </nav>
        <img src={this.props.image_url} alt={this.props.name} />
        <h1>{this.props.name}</h1>
        <h2>{this.props.tagline}</h2>
        <p>{this.props.description}</p>
        <p>Created by: {this.props.name}</p>
      </div>
    );
  }
}

export default DetailedBeer;
