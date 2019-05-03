import React, { Component } from 'react'

export default class Beer extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image_url} alt={this.props.name}/>
        <h4>{this.props.name}</h4>
        <h6>{this.props.tagline}</h6>
        <p>Created By: {this.props.contributed_by}</p>
      </div>
    )
  }
}
