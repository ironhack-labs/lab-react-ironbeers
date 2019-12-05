import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeItem extends Component {
  render() {
    return (
      <div className="home-item card" style={{ marginBottom: "24px" }}>
        <Link to={this.props.route}>
          <div className="card-image">
            <figure className="image">
              <img src={this.props.image} alt={this.props.title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h2 className="title">{this.props.title}</h2>
              <p>{this.props.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
