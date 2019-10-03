import React, { Component } from "react";
import Header from "./Header";

export default class NewBeer extends Component {
  render() {
    return (
      <div>
        <Header />
        <img src="./images/new-beer.png" alt="" />
        <h1>New Beer</h1>
      </div>
    );
  }
}
