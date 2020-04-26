import React, { Component } from 'react';
import Header from './Header';
import Loading from './Loading';
import Error from './Error';
import axios from 'axios';

const API_ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';
const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class BeerDetail extends Component {
  state = {
    beer: [],
    status: STATUS.LOADING,
    error: undefined,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(API_ENDPOINT + `/${id}`)
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
          <BeerDetails beer={beer} />
        </div>
        )
      case STATUS.ERROR:
        return <Error error={error} />
    }
  }
}

const BeerDetails = ({ beer }) => {
  const { image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by } = beer;
  return (
      <div className='beer-detail'>
        <div className='beer-image-container'>
          <img alt={name} src={image_url} />
        </div>
        <div className='beer-info'>
          <div className='title-row'>
            <h2 className='title'>{name}</h2>
            <span className='attenuation-level'>{attenuation_level}</span>
          </div>
          <div className='tagline-row'>
            <p className='tagline'>{tagline}</p>
            <span className='first-brewed'>{first_brewed}</span>
          </div>
          <p className='description'>{description}</p>
          <p className='created-by'>Created by: {contributed_by}</p>
        </div>
      </div>
  );
}
