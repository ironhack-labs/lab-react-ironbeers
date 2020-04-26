import React, { Component } from 'react';
import API from './API';
import Loading from './Loading';
import Error from './Error';
import BeerPage from './BeerPage';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class RandomBeer extends Component {
  state = {
    beer: [],
    status: STATUS.LOADING,
    error: undefined,
  };

  componentDidMount() {
    API('get', '/random')
      .then((response) => {
        this.setState({
          beer: response.data,
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
    const { beer, status, error } = this.state;
    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <Loading />
      case STATUS.LOADED:
        return <BeerPage beer={beer} />
      case STATUS.ERROR:
        return <Error error={error} />
    }
  }
}
