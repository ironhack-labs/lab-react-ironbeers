import React, { Component } from 'react'
import "./HomeCard.css"

export default class HomeCard extends Component {
  render() {
    return (
      <div class="home-card">
        <img src={this.props.image} alt="Beers"/>
        <h2 className="home-card-title">{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}
