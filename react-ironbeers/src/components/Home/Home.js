import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <section>
          <Link to={"/beers"}>Beers</Link>
        </section>
        <section>
          <Link to={"/random-beer"}>Random Beers</Link>
        </section>
        <section>
          <Link to={"/new-beer"}>New Beer</Link>
        </section>
      </div>
    );
  }
}
