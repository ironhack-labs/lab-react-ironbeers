import React, { Component } from 'react';
import axios from 'axios';

// Componentns

import SingleBeerCard from '../components/SingleBeerCard';

export default class listBeers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beerList: [],
    };
  }
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/').then((beer) => {
      this.setState({ beerList: beer.data });
      console.log(this.state.beerList);
    });
  }
  render() {
    return (
      <div>
        <h1>List all Beers</h1>
        {this.state.beerList.map((beer) => {
          return <SingleBeerCard key={beer._id} data={beer} />;
        })}
      </div>
    );
  }
}
