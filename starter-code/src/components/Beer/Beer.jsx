import React, { Component } from 'react'

export default class Beer extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="beer">
      {console.log(this.props.beer)}
        <img src={this.props.beer.image_url} alt={this.props.beer.name}/>
        <h2 className="beer-name">{this.props.beer.name}</h2>
        <p className="beer-tagline">{this.props.beer.tagline}</p>
        <p className="beer-contributed-by">{this.props.beer.contributed_by}</p>
      </div>
    )
  }
}
