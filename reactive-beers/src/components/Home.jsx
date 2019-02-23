import React, { Component } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>
          <Link to="/beers">
            <img className="imgHome" src="../img/all-beers2.jpg" alt="all-beer" />
          </Link>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsa
            eligendi quisquam natus suscipit at eius quas, amet quidem
            blanditiis modi nulla voluptatibus
          </p>
        </div>
        <div>
          <Link to="/random-beer" Component>
            <img
              className="imgHome"
              src="../img/random-beer.jpg"
              alt="random-beer"
            />
          </Link>
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsa
            eligendi quisquam natus suscipit at eius quas, amet quidem
            blanditiis modi nulla voluptatibus
          </p>
        </div>

        <div>
          <Link to="/new-beer">
          <img className="imgHome" src="../img/new-beer.jpg" alt="new-beer" />
          </Link>
          <h2>New Beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsa
            eligendi quisquam natus suscipit at eius quas, amet quidem
            blanditiis modi nulla voluptatibus
          </p>
        </div>
      </div>
    );
  }
}
