import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BeerItem extends Component {
  render() {
    return (
      <div>
        <div className="beer_card">
        <div className="img_container">
        <img src={this.props.beerImg} alt={this.props.beerName} className="img2" />
        </div>
        <div className="beer_desc_container">
        <h3>{this.props.beerName}</h3>
        <h4>{this.props.beerTagline}</h4>
        <p>{this.props.beerDesc}</p>
        <Link to={`/beers/${this.props.link}`}>More details</Link>
        </div>
        </div>
      </div>
    )
  }
}