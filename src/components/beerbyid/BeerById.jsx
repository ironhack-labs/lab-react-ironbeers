import React from 'react';
import { getBeerById } from '../../services/api-client';
import BeerDetail from '../beerdetail/BeerDetail';

class BeerById extends React.Component {
  state = {
    beer: [],
  };

  fetchBeerById = () => {
    getBeerById(this.props.match.params.id).then((beer) => {
      this.setState({ beer });
    });
  };

  componentDidMount() {
    this.fetchBeerById();
  }

  componentWillUnmount() {
    this.setState({ beer: [] });
  }

  render() {
    return <BeerDetail beer={this.state.beer} />;
  }
}

export default BeerById;
