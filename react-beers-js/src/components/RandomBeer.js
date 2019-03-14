import React, { Component } from "react";
import axios from "axios";

import Header from "./Header.js";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getRandomBeer();
  }

  getRandomBeer = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)

      .then(responseFromApi => {
        const randomBeer = responseFromApi.data[0];
        console.log(randomBeer);
        this.setState(randomBeer);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <img src={this.state.image_url} alt="" style={{ height: "200px" }} />
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.tagline}</p>
            <p>{this.state.attenuation_level}</p>
            <p>{this.state.first_brewed}</p>

            <p>{this.state.description}</p>
            <p>{this.state.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
