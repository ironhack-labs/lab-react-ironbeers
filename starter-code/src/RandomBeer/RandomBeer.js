import React, { Component } from "react";

export default class RandomBeer extends Component {
  render() {
    return (
      <div className="oneServesa marginpage">
        <img src={this.props.beer.image_url}></img>
        <div className="topbeer">
          <div className="leftside">
            <h1>{this.props.beer.name}</h1>
            <h2>{this.props.beer.tagline}</h2>
          </div>
          <div className="rightside">
            <h2>{this.props.beer.attenuation_level}</h2>
            <p>
              <strong>{this.props.beer.first_brewed}</strong>
            </p>
          </div>
        </div>
        <p>{this.props.beer.description}</p>
        <h2>{this.props.beer.contributed_by}</h2>
      </div>
    );
  }
}
