import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BeerInfo from './BeerInfo';
import axios from 'axios';

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      this.setState({
        beers: res.data,
      });
    });
  }

  render() {
    return (
      <>
        {this.state.beers.map((elm) => (
          <BeerInfo key={elm._id} {...elm} />
        ))}
      </>
    );
  }
}

export default Beers;
