import React, { Component } from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails';
import Header from './Header';

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
      <Header />
        {this.state.beers.map((item) => (
          <BeerDetails key={item._id} {...item} />
        ))}
      </>
    );
  }
}

export default Beers;
