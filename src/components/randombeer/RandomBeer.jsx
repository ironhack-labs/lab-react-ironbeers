import React from 'react';
import { getRandomBeer } from '../../services/api-client';
import BeerDetail from '../beerdetail/BeerDetail';

class RandomBeer extends React.Component {
  state = {
    beer: [],
  };

  fetchRandomBeer = () => {
    getRandomBeer().then((beer) => {
      this.setState({ beer });
    });
  };
  componentDidMount() {
    this.fetchRandomBeer();
  }

  componentWillUnmount() {
    this.setState({ beer: [] });
  }

  render() {
    return <BeerDetail beer={this.state.beer} />;
  }
}

export default RandomBeer;
