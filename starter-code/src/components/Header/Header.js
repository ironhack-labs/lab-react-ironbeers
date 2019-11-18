import React, { Component } from "react";
import { Link } from "react-router-dom";
import allbeersImg from "../../images/beers.png";
import randombeerImg from "../../images/random-beer.png";
import newbeerImg from "../../images/new-beer.png";

export default class Header extends Component {

  render() {
   

    return (
      <div className={"container"}>
        <Link to="/list/">
          <img src={allbeersImg} alt="All Beers" />
        </Link>
        <h3>List of Beers</h3>
        <Link to="/random/">
          <img src={randombeerImg} alt="Random Beer" />
        </Link>
        <h3>Random Beer</h3>
        <Link to="/new/">
          <img src={newbeerImg} alt="New Beer" />
        </Link>
        <h3>Add a Beer</h3>
      </div>
    );
  }
}
