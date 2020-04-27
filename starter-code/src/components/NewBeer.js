import React, { Component } from 'react';
import API from '../lib/API';
import ContentLoader from './ContentLoader';
import NewBeerForm from './NewBeerForm';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class NewBeer extends Component {
  state = {
    status: STATUS.LOADED,
    error: undefined,
  };

  addBeer = (newBeer) => {
    const request = { method: 'post', route: '/new', data: newBeer };
    const actions = {
      onSuccess: (response) => {
        if (response.statusText !== 'OK') throw Error (response.statusText);
        this.props.history.push('/beers');
      },
      onFailure: (error) => this.setState({
        error: error.message,
        status: STATUS.ERROR,
      }),
    };
    API(request, actions);
  }

  render() {
    const { status, error } = this.state;
    return (
      <ContentLoader status={status} error={error}>
        <NewBeerForm addBeer={this.addBeer} />
      </ContentLoader>
    )
  }
}
