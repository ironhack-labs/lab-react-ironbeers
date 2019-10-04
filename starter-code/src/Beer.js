import React, { Component } from 'react'

export default class beer extends Component {
  render() {
    return (
      <div className="oneBeer">
        
        <img src={this.props.random.image_url}></img>
        <h2>{this.props.random.name}</h2>
        <h3>{this.props.random.tagline}</h3>
      </div>
    )
  }
}
