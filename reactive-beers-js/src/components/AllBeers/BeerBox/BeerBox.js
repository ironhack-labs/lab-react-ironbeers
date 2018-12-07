import React, { Component } from 'react'
import './BeerBox.css'
import { Link } from 'react-router-dom';

export default class BeerBox extends Component {
  render() {
    return (
      <Link to={"/beers/"+this.props.beer._id}>
        <div className="beer-box">
          <div className="img-div">
            <img src={this.props.beer.image_url} />
          </div>
          <div className="content">
            <h1>{this.props.beer.name}</h1>
            <h3>{this.props.beer.tagline}</h3>
            <p>Created by: {this.props.beer.contributed_by}</p>
          </div>
        </div>
      </Link>
    )
  }
}
