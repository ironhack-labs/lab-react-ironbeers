import React, { Component } from "react";

export default class OneBeer extends Component {
  render() {
    console.log(this.props.beer);
    if (!this.props.beer) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="one-beer">
          <img src={this.props.beer.image_url} alt="" />
          <div className="info">
            <h3 className="name">{this.props.beer.name}</h3>
            <p className="tagline">{this.props.beer.tagline}</p>
            <p className="first-brewed">
              <strong>First Brewed</strong>
              {this.props.beer.first_brewed}
            </p>
            <p className="attentuation">
              <strong>Attentuation Level</strong>
              {this.props.beer.attenuation_level}
            </p>
            <p className="description">
              <strong>Description</strong>
              {this.props.beer.description}
            </p>
            <p className="contributor">
              <strong>Contributed By</strong> {this.props.beer.contributed_by}
            </p>
          </div>
        </div>
      );
    }
  }
}

/*
image
name
tagline
first_brewed
attenuation_level
description
contributed_by
*/
