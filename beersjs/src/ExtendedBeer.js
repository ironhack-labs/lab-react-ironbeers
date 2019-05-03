import React, { Component } from "react";

export default class ExtendedBeer extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image_url} alt={this.props.name} />
        <h4>
          {this.props.name}
        </h4>
        <h6>
          {this.props.tagline}
        </h6>
        <p>
          {this.props.description}
        </p>
        <p>
          {this.props.attenuation_level}
        </p>
        <p>
          {this.props.first_brewed}
        </p>
        <p>
          Created By: {this.props.contributed_by}
        </p>
      </div>
    );
  }
}
