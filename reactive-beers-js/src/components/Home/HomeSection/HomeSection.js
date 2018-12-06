import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './HomeSection.css'

export default class HomeSection extends Component {
  render() {
    return (
      <Link className="home-section" key={this.props.key} to={this.props.link}>
      <div>
        <img src={this.props.img} />
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        </div>
      </Link>
    )
  }
}
