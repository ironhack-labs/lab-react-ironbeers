import React, { Component } from 'react';
import axios from 'axios';
export default class RandomBeer extends Component {
  state = {
    Beer: '',
  };
async componentDidMount() {let Beer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
this.setState({Beer: Beer.data,});}
renderRandom = () => {
    return (
      <div>
        <img src={this.state.Beer.image_url} alt="one beer" />
        <h4>{this.state.Beer.name}</h4>
        <p>{this.state.Beer.tagline}</p>
        <p>{this.state.Beer.first_brewed}</p>
        <p>{this.state.Beer.attenuation_level}</p>
        <p>{this.state.Beer.description}</p>
        <p>{this.state.Beer.contributed_by}</p>
      </div>
    );
  };
  render() {
    return <div>{this.renderRandom()}</div>;
  }
}




