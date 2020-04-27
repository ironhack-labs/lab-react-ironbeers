import React, { Component } from 'react';
import { StatusContext } from '../context/StatusContext';
import API from '../lib/API';
import ContentLoader from './ContentLoader';
import BeerPage from './BeerPage';

export default class BeerDetail extends Component {
  static contextType = StatusContext;

  state = {
    status: this.context.STATUS.LOADING,
    error: undefined,
    beer: [],
  };

  componentDidMount = () => {
    const { STATUS } = this.context;
    const { id } = this.props.match.params;
    const request = { method: 'get', route: `/${id}` };
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
