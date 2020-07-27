import React, { Component } from 'react';
import BeerCard from './BeerCard';

export class Beers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.beers.map((beer) => <BeerCard beer={beer} />);
    return <div className="container">{list}</div>;
  }
}

export default Beers;
