import React, { Component } from 'react';
import API from '../lib/API';
import ContentLoader from './ContentLoader';
import BeerPage from './BeerPage';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class RandomBeer extends Component {
  state = {
    status: STATUS.LOADING,
    error: undefined,
    beer: [],
  };

  componentDidMount = () => {
    const request = { method: 'get', route: '/random' };
    const actions = {
      onSuccess: (response) => this.setState({
        beer: response.data,
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
    const { status, error, beer } = this.state;
    return (
      <ContentLoader status={status} error={error}>
        <BeerPage beer={beer} />
      </ContentLoader>
    )
  }
}
