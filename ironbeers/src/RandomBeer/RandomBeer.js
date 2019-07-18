import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {}
    };
  }

  getRandomBeer = () => {
    Axios.get(`http://localhost:5000/random`).then(responseFromApi => {
      console.log(responseFromApi.data);
      this.setState({
        randomBeer: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    console.log(this.state.randomBeer.name);
    return (
      <div>
        <h1>{this.state.randomBeer.name}</h1>
        <img
          style={{ width: "100px", height: "180px" }}
          src={this.state.randomBeer.image_url}
          alt={this.state.randomBeer.name}
        />
        <p>{this.state.randomBeer.tagline}</p>
      </div>
    );
  }
}

export default RandomBeer;
