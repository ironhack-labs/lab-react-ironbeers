import React, { Component } from 'react';
import { getOneBeer } from '../services/BeersService';
import './Beer.css';

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    }
  }

  componentDidMount = () => {
    const beerId = this.props.match.params.id;
    getOneBeer(beerId)
      .then(response => {
        this.setState({
          beer: response.data
        })
      })
  }

  render() {
    return (
      <div className="card beer-card">
        <div className="card-image beer-card-image">
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        </div>
        <div className="card-content beer-card-content">
          <div className="beer-card-header-title">
            <h2 className="title">{this.state.beer.name}</h2>
            <span className="has-text-dark">{this.state.beer.attenuation_level}</span>
          </div>
          <div className="beer-card-header-title">
            <h4 className="subtitle has-text-grey">{this.state.beer.tagline}</h4>
            <span className="has-text-dark">{this.state.beer.first_brewed}</span>
          </div>
          <div className="content">
            <p>{this.state.beer.description}</p>
          </div>
          <div className="content">
            <p>Created by: <strong>{this.state.beer.contributed_by}</strong></p>
          </div>
        </div>
      </div>
    )
  }
}
