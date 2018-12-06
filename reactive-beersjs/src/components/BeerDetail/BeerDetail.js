import React, { Component } from 'react'

export default class BeerDetail extends Component {
  render() {
    return (
      <div>
        <img src={this.props.beer.image_url} />
        <p className="title">{this.props.beer.name}</p>
        <p className="atenuation">{this.props.beer.attenuation_level}</p>
        <p className="tagline">{this.props.beer.tagline}</p>
        <p className="first-brewed">{this.props.beer.first_brewed}</p>
        <p className="description">{this.props.beer.description}</p>
        <p className="contributor">{this.props.beer.contributed_by}</p>
      </div>
    )
  }
}
