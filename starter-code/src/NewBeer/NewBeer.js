import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./NewBeer.css";

class NewBeer extends Component {
  render() {
    return (
      <div className="NewBeer">
        <Link to="/">Home</Link>
        <h1> hi </h1>{" "}
      </div>
    );
  }
}

export default NewBeer;
