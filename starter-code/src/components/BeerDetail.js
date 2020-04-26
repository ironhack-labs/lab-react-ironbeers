import React, { Component } from 'react';
import API from './API';
import BeerPage from './BeerPage';
import Header from './Header';
import Loading from './Loading';
import Error from './Error';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class BeerDetail extends Component {
  state = {
    beer: [],
    status: STATUS.LOADING,
    error: undefined,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    API('get', `/${id}`)
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
        return (
        <div>
          <Header />
          <BeerPage beer={beer} />
        </div>
        )
      case STATUS.ERROR:
        return <Error error={error} />
    }
  }
}
