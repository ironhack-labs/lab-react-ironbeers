import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: {}
    };
    console.log('PROPS:', this.props);
  }

  componentDidMount = () => {
    axios
      .get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      )
      .then(res => {
        console.log('OneBeer', res.data);
        this.setState({
            randomBeer: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <img src={this.state.randomBeer.image_url} alt="" />
        <h3>{this.state.randomBeer.name}</h3>
        <p>{this.state.randomBeer.tagline}</p>
        <p>{this.state.randomBeer.first_brewed}</p>
        <p>{this.state.randomBeer.attenuation_level}</p>
        <p>{this.state.randomBeer.description}</p>
        <p>Created By: {this.state.randomBeer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
