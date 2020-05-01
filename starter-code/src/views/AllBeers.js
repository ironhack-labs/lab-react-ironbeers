import React, { Component } from 'react';
import Nav from '../components/Nav';

class AllBeers extends Component {

  showAllBeers = () => {
    const { beers } = this.props;
    return beers.map((beer, index) => {
      return <li key={index}>{beer.name}</li>
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Nav />
        <ul>{this.showAllBeers()}</ul>
      </div>
    );
  }
}

export default AllBeers;