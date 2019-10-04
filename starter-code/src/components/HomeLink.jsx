import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class HomeLink extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.target}>
          <img src={this.props.img} alt={this.props.img + "img"}></img>
        </Link>
        <h4>{this.props.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
      </div>
    );
  }
}
