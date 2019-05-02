import React, { Component } from 'react'
import './Beer.css';

export default class Beer extends Component {
  render() {
    return (
      <div className="beer">
            <div>
            <img src={this.props.image_url}/>
            </div>
            <div>
            <p>{this.props.name}</p>
            <p>{this.props.tagline}</p>
            <p>{this.props.contributed_by}</p>
            </div>
           
      </div>
    )
  }
}
