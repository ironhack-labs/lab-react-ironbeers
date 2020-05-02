import React, { Component } from "react";

class BeerDetail extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.name} className="medium" />
        <div className="flex flex-justify m-0_5">
          <h3>{this.props.name}</h3>
          <h3 className="color-secondary">{this.props.attenuation}</h3>
        </div>

        <div className="mt-1">
          <h4 className="m-0_5">{this.props.tagline}</h4>
          <p className="m-0_5 color-primary">{this.props.date}</p>
        </div>

        <p className="m-0_5 mt-1">{this.props.description}</p>
      </div>
    );
  }
}

export default BeerDetail;
