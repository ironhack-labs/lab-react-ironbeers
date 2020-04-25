import React, { Component } from 'react';
import BeerPreview from './BeerPreview';
import Loading from './Loading';
import Error from './Error';
import axios from 'axios';

const API_ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';
const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class BeerList extends Component {
  state = {
    beers: [],
    status: STATUS.LOADING,
    error: undefined,
  };

  componentDidMount() {
    axios
      .get(API_ENDPOINT)
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
    const { beers, status, error } = this.state;
    console.log('beers', beers);
    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <Loading />
      case STATUS.LOADED:
        return <BeerPreviews beers={beers} />
      case STATUS.ERROR:
        return <Error error={error} />
    }
  }
}

const BeerPreviews = ({ beers }) => {
  return (
    <div>
      {beers.map((beer, i) => <BeerPreview key={beer.name + i} beer={beer} />)}
    </div>
  )
}