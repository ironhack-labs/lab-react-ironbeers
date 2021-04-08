import React, { Component } from 'react';
import Navbar from './Navbar';
import Beer from './Beer';
import { getRamdon } from '../services/BaseService';

class RandomBeer extends Component {
  state = {
    beer: [],
    loading: true,
  };

  componentDidMount() {
    getRamdon().then((beer) => this.setState({ beer, loading: false }));
  }

  render() {
    const {beer } = this.state;
    return (
      <div className="">
          <Navbar />
          <Beer {...beer}/>
      </div>
    );
  }
}

export default RandomBeer;