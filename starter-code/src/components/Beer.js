import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Beer extends Component {
  constructor(props){
    super(props)
    this.state = {
      path: "/single/" + this.props.id
    }
  }
  render() {
    return (
      <div className="beer">
        <img src={this.props.image} alt={this.props.name + " photo"}></img>
        <h1><Link to={this.state.path}>{this.props.name}</Link></h1>
        <h2>{this.props.tagline}</h2>
        <p>Contributed by: {this.props.contributed}</p>
      </div>
    )
  }
}
