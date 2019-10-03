import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Card extends Component {
  render() {
    return (
        <Link to={this.props.link}>
            <div className="card">
              <img src={this.props.image} alt="" className="card-img-top"/>
              <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, aspernatur? Mollitia, officia odit maxime temporibus cum quasi enim totam debitis.</p>
              </div>
            </div>
        </Link>
    )
  }
}