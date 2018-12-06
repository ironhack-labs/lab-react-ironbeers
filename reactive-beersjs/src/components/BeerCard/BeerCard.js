import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './BeerCard.css'

export default class BeerCard extends Component {
  render() {
    return (
      <Link className="BeerCard" to={`/beer/${this.props.beer._id}`}>
        <img src={this.props.beer.image_url} />
        <p className="name">{this.props.beer.name}</p>
        <p className="subtitle">{this.props.beer.tagline}</p>
        <p className="author">Created by: {this.props.beer.contributed_by}</p>
      </Link>
    )
  }
}
