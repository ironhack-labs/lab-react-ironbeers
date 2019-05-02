import React, { Component } from 'react';
import './Beer.css';
import {Link} from 'react-router-dom';

export default class Beer extends Component {
  render() {
    return (
      <div className="Beer">
        <img src={this.props.image_url} alt={this.props.name}/>
        <h3><Link  to={"/beer/"+this.props._id}>{this.props.name}</Link></h3>
        <p>{this.props.tagline}</p>
        <span>{this.props.contributed_by}</span>
      </div>
    )
  }
}
