import React, { Component } from "react";

export default class SingleBeer extends Component {

  transformName(name) {
    const regex = /^\w+\s\w+/;
    return name.match(regex);
  }

  render() {
  
    return (
      <div>
        <img src={this.props.image_url} alt="beer bottle" />
        <h2>{this.props.name}</h2>
        <p>{this.props.tagline}</p>
        <h4>Created by: </h4>{" "}
        <p>{this.transformName(this.props.contributed_by)}</p>
      </div>
    );
  }
}
