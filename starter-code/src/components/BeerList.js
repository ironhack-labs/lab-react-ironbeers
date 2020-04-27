import React, { Component } from 'react';
import API from '../lib/API';
import ContentLoader from './ContentLoader';
import BeerPreview from './BeerPreview';
import SearchBar from './SearchBar';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class BeerList extends Component {
  state = {
    status: STATUS.LOADING,
    error: undefined,
    beers: [],
  };

  componentDidMount = () => this.queryAPI({ route: '/' });

  searchBeers = (query) => this.queryAPI({ route: `/search?q=${query}` });

  queryAPI = ({ route }) => {
    const request = { method: 'get', route };
    const actions = {
      onSuccess: (response) => this.setState({
        beers: response.data,
        status: STATUS.LOADED,
      }),
      onFailure: (error) => this.setState({
        error: error.message,
        status: STATUS.ERROR,
      }),
    };
    API(request, actions);
  }

  render() {
    const { status, error, beers } = this.state;
    return (
      <ContentLoader status={status} error={error}>
        <SearchBar searchBeers={this.searchBeers} />
        <BeerPreviews beers={beers} />
      </ContentLoader>
    )
  }
}

const BeerPreviews = ({ beers }) => {
  return (
    <div>
      {beers.map((beer, i) => <BeerPreview key={beer.name + i} beer={beer} />)}
    </div>
  )
}
