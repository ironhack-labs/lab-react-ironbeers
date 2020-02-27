import React, { Component } from 'react';
import axios from 'axios';

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(res => {this.setState({beer: res.data});})
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </>
    );
  }
}

export default Beer;