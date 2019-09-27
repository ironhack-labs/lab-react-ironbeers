import React, { Component } from "react";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    randomBeer: []
  };

  getrandomBeer = () => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(response => {
        const randomBeer = response.data;
        // console.log(randomBeer);
        this.setState({
          randomBeer: randomBeer
        });
      });
  };

  componentDidMount() {
    this.getrandomBeer();
  }

  render() {
    return (
      <div>
        <div className="singBeer-div">
          <img
            className="beer-img"
            src={this.state.randomBeer.image_url}
            alt={this.state.randomBeer.name}
          />
          <div>
            <h1>{this.state.randomBeer.name}</h1>
            <h2>{this.state.randomBeer.tagline}</h2>
            <p>{this.state.randomBeer.first_brewed}</p>
            <p>{this.state.randomBeer.attenuation_level}</p>
            <p>{this.state.randomBeer.description}</p>
            <p>{this.state.randomBeer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}
