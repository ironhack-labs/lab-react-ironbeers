import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./RandomBeer.css";

class RandomBeer extends Component {
  render() {
    return (
      <div className="RandomBeer">
        <Link to="/">Home</Link>
        <h1> hi </h1>{" "}
      </div>
    );
  }
}

export default RandomBeer;
