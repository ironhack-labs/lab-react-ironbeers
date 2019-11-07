import React, { Component } from "react";
import axios from "axios";
class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: []
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        this.setState({ randomBeer: response.data });
      });
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.randomBeer.name}</h1>
        <img
          src={this.state.randomBeer.image_url}
          alt="broken"
          height="200px"
        ></img>
        <h1>Tagline: {this.state.randomBeer.tagline}</h1>
        <h1>Tagline: {this.state.randomBeer.first_brewed}</h1>
        <h1>Tagline: {this.state.randomBeer.attenuation_level}</h1>
        <h1>Tagline: {this.state.randomBeer.description}</h1>
        <h1>Contributed by: {this.state.randomBeer.contributed_by}</h1>
      </div>
    );
  }
}
export default RandomBeer;
