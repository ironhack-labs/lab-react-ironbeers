import axios from 'axios';
import Beer from './Beer';
import React, { Component } from 'react';

export default class RandomBeer extends Component {
  state = {
    randomBeer: null
  }
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        this.setState({
          randomBeer: response.data
        });
      })
      .catch(err => console.log(err)
      )
  }

  render() {
    return <Beer beer={ this.state.randomBeer } />
  }
}
