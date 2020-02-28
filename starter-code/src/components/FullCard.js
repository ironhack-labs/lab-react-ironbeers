import React, { Component } from "react";
class FullCard extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="fullCardImg"
          src={this.props.data.image_url}
          alt="beer"
        />
        <div>
          <h1>{this.props.data.name}</h1>
          <h3>{this.props.data.tagline}</h3>
          <h5>{this.props.data.first_brewed}</h5>
          <h5>{this.props.data.attenuation_level}</h5>
          <h4>{this.props.data.description}</h4>
          <p>{this.props.data.contributed_by}</p>
        </div>

        <div />
      </div>
    );
  }
}

export default FullCard;