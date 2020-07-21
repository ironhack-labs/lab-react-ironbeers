import React, { Component } from 'react';
import axios from 'axios';

export default class EachBeer extends Component {
  state = {
    oneBeer: '',
  };

async componentDidMount() {let eachBeer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`);this.setState({oneBeer: eachBeer.data,});}

  displayOneBeer = () => {
    return (
      <div>
        <img src={this.state.oneBeer.image_url} alt="one beer" />
        <h4>{this.state.oneBeer.name}</h4>
        <p>{this.state.oneBeer.tagline}</p>
        <p>{this.state.oneBeer.first_brewed}</p>
        <p>{this.state.oneBeer.attenuation_level}</p>
        <p>{this.state.oneBeer.description}</p>
        <p>{this.state.oneBeer.contributed_by}</p>
      </div>
    );
  };

  render() {
    return <div>{this.displayOneBeer()}</div>;
  }
}

