import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class RandomBeer extends Component {
  state = {
    randomBeer: []
  };

  randomBeer = () => {
    axios
      .get(
        `https://ih-beer-api.herokuapp.com/beers/random`
      )
      .then(response => {
        console.log(response.data.name);
        this.setState({
          randomBeer: response.data
        });
      });
  };

  componentDidMount() {
    this.randomBeer();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          <img height="400px" src={this.state.randomBeer.image_url} alt="" />
          <div>
            <h2>{this.state.randomBeer.name}</h2>
            <h2>{this.state.randomBeer.attenuation_level}</h2>
          </div>
          <div>
            <h3>{this.state.randomBeer.tagline}</h3>
            <h3>{this.state.randomBeer.first_brewed}</h3>
          </div>
          <p>{this.state.randomBeer.description}</p>
          <h6>{this.state.randomBeer.contributed_by}</h6>
        </div>
      </React.Fragment>
    );
  }
}
