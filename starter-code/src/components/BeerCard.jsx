import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BeerCard extends Component {
  render() {
    return (
      <Link className="beer-card" to={"/beer/" + this.props.beer._id}>
        <img src={this.props.beer.image_url} alt="" />
        <div className="info">
          <h3 className="name">{this.props.beer.name}</h3>
          <p className="tagline">{this.props.beer.tagline}</p>
          <p className="contributor">
            <strong>Contributed By:</strong> {this.props.beer.contributed_by}
          </p>
        </div>
      </Link>
    );
  }
}
