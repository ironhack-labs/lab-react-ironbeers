import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from '../images/Home.png';

export default class RandomBeer extends Component {
  render() {
    return (
      <div>
        <h1>Random Beer</h1>
        <header>
          <Link to="/"><img src={home} alt="Banner" className="banner"/></Link>
        </header>
      </div>
    );
  }
}
