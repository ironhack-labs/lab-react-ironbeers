import React, { Component } from 'react';
import API from '../lib/API';
import ContentLoader from './ContentLoader';
import BeerPreview from './BeerPreview';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class BeerList extends Component {
  state = {
    status: STATUS.LOADING,
    error: undefined,
    beers: [],
  };

  componentDidMount() {
    API('get', '/')
      .then((response) => {
        this.setState({
          beers: response.data,
          status: STATUS.LOADED,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          status: STATUS.ERROR,
        });
      })
  }

  render() {
    const { status, error, beers } = this.state;
    return (
      <ContentLoader status={status} error={error}>
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
