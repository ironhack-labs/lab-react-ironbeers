import React, { Component } from "react";
import Header from "./Header";

export default class RandomBeer extends Component {
  render() {
    return (
      <div>
        <Header />
        <img src="./images/random-beer.png" alt="" />
        <h1>Random Beer</h1>
      </div>
    );
  }
}
