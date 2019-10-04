import React, { Component } from 'react'

export default class beer extends Component {
  render() {
    return (
      <div className="oneBeer">
        
        <img src={this.props.image_url}></img>
        <h2>{this.props.name}</h2>
        <h3>{this.props.tagline}</h3>
      </div>
    )
  }
}
