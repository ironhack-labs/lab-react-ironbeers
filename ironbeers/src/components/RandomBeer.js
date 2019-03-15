import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./RandomBeer.css";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getRandomBeer = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(response => {
        console.log(response.data[0]);
        this.setState(response.data[0]);
      })
      .catch(err => {
        alert("Something went wrong");
      });
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="RandomBeer">
          <img
            src={this.state.image_url}
            alt={this.state.name}
            className="image-randomBeer"
          />
          <h2>
            {this.state.name} {this.state.tagline}
          </h2>
          <p>
            {this.state.attenuation_level} {this.state.first_brewed}
          </p>
          <p>{this.state.description}</p>
          <p>{this.state.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
