import React, { Component } from 'react';
import axios from 'axios';

export default class SingleBeer extends Component {
  state = {
    beer: {},
    loading: true,
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          beer: response.data,
          loading: false,
        });
      });
  }

  //* display these:
  //image
  // name
  // tagline
  // first_brewed
  // attenuation_level
  // description
  // contributed_by

  render() {
    return (
      <div>
        <h3>Name : {this.state.beer.name}</h3>
        <h3>Tagline : {this.state.beer.tagline}</h3>
        <h3>First Brewed : {this.state.beer.first_brewed}</h3>
        <h3>Attenuation level : {this.state.beer.attenuation_level}</h3>
        <p>{this.state.beer.description}</p>
        <h3>Contributed by: {this.state.beer.contributed_by}</h3>
      </div>
    );
  }
}
