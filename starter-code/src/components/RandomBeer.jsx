import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  state = { randomBeer: {} };
  componentDidMount() {
    this.fetchRandom();
  }

  fetchRandom = async () => {
    try {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      this.setState({ randomBeer: data });
    } catch (e) {
      console.log("Error fetching beers", e);
    }
  };
  render() {
    const { randomBeer } = this.state;
    return (
      <div>
        <img src={randomBeer.image_url} alt="beer" />
        <p>{randomBeer.name}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brew}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
