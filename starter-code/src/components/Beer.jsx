import React from "react";
import Navigation from "./Navigation";

export default class Beer extends React.Component {

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div className="beer-detail section">
          <div className="container">
            <img src={this.props.image_url} alt={this.props.name} />

            <div
              className="is-flex"
              style={{ justifyContent: "space-between" }}
            >
              <h1 className="title is-3">{this.props.name}</h1>
              <span className="title is-3 has-text-grey-light">
                {this.props.attenuation_level}
              </span>
            </div>

            <div
              className="is-flex"
              style={{ justifyContent: "space-between" }}
            >
              <h2 className="subtitle has-text-grey has-text-weight-semibold">
                {this.props.tagline}
              </h2>
              <span>{this.props.first_brewed}</span>
            </div>
            <div className="has-text-left">
              <p className="is-size-5" style={{ marginBottom: "24px" }}>
                {" "}
                {this.props.description}
              </p>
              <p className="subtitle has-text-grey has-text-weight-semibold is-size-7 is-uppercase">
                Created by: {this.props.contributed_by}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
