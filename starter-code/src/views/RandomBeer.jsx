import React, { Component } from "react";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers/random"
  };
  componentDidMount() {
    axios
      .get(this.state.APIEndpoint)
      .then(apiRes => {
        this.setState({
          beer: apiRes.data
        });
      })
      .catch(apiErr => console.error(apiErr));
  }
  render() {
    return this.state.beer ? (
      <div className="beer one_beer">
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <div className="row">
          <h1>{this.state.beer.name}</h1>
          <div className="attenuation">{this.state.beer.attenuation_level}</div>
        </div>
        <div className="row">
          <h2>{this.state.beer.tagline}</h2>
          <div className="first_brewed">{this.state.beer.first_brewed}</div>
        </div>
        <p>{this.state.beer.description}</p>
        {this.state.beer.contributed_by && (
          <div className="created_by">{this.state.beer.contributed_by}</div>
        )}
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
