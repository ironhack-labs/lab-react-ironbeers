import React, { Component } from 'react';
import BeerCard from './BeerCard';
import Header from '../header/Header';

export class Beers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.beers.map((beer) => (
      <BeerCard key={beer._id} beer={beer} />
    ));
    return (
      <div>
        <Header></Header>
        {list}
      </div>
    );
  }
}

export default Beers;
