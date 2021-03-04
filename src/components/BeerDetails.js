import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

export default class BeerDetails extends Component {
  state = {
    beerDetails: {},
  };
  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          beerDetails: response.data,
        });
      });
  }
  render() {
    console.log(this.state.beerDetails);
    return (
      <div>
        Beer Details {this.props.dog} {this.props.match.params.id}
        <div key={this.state.beerDetails._id}>
          <img
            src={this.state.beerDetails.image_url}
            alt={this.state.beerDetails.name}
            width="50vw"
          />
          <h2>{this.state.beerDetails.name}</h2>
          <p>{this.state.beerDetails.tagline}</p>
          <p>{this.state.beerDetails.contributed_by}</p>
        </div>
      </div>
    );
  }
}
