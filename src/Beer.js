import React, { Component } from 'react';
import './Beer.css';

export default class Beer extends Component {
  render() {
    return (
      <div className="Beer">
        <img src={this.props.image_url} alt={this.props.name}/>
        <h3>{this.props.name}</h3>
        <p>{this.props.tagline}</p>
        <span>{this.props.contributed_by}</span>
      </div>
    )
  }
}
