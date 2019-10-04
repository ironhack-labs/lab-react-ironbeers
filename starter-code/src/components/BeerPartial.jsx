import React, { Component } from 'react'
import './BeerPartial.css'
import { Link } from "react-router-dom";

export default class BeerPartial extends Component {
  render() {
    return (
      <div className="beerPartial">
        <img src={this.props.src} alt={this.props.name + " pic"}></img>
        <div className="beerInfo">
        <h4><Link to={'/:' + this.props.target}>{this.props.name}</Link></h4>
        <p>{this.props.tagline}</p>
        <p>{this.props.contributed_by}</p>
        </div>
      </div>
    )
  }
}
