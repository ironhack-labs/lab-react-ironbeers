import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Hero extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
  <div className="container text-left">
  <img src={this.props.src} className="d-block w-100" alt={this.props.title}></img>
    <Link to={'/'+this.props.route}><h1 className="display-4">{this.props.title}</h1></Link>
    <p className="lead">{this.props.text}</p>
  </div>
</div>
        )
    }
}
