import React, { Component } from 'react'
import api from '../lib/apiClient';
import Header from './Header'

const STATES = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR'
}

export default class Beer extends Component {

  constructor() {
    super()
    this.state = {
      status: STATES.LOADING
    }
  }

  componentDidMount = async () => {
    const { id: beerId } = this.props
    api.get(`/beers/${beerId}`)
    .then(response => {
      const { data: beer } = response
      this.setState({ beer, status: STATES.LOADED })
    })
    .catch(error => this.setState({ status: STATES.ERROR, error }))
  }

  showContent = () => {
    const { status, beer, error } = this.state
    switch (status) {
      case STATES.LOADING:
        return <div>Loading</div>
      case STATES.LOADED:
        return (
          <div className="single-beer">
            <img src={beer.image_url} alt="" />
            <div className="single-beer-header">
              <p className="title">{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.attenuation_leve}</p>
            </div>
            <div className="single-beer-description">
              <p className="subtitle">{beer.description}</p>
            </div>
            <div className="single-beer-footer">
              <p className="createdBy"><strong>Created By: </strong>{beer.contributed_by}</p>
            </div>
          </div>
        );
      case STATES.ERROR:
        return <div>{ error.toString() }</div>
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Header/>
        { this.showContent() }
      </div>
    );
  }
}
