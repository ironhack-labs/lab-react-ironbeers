import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Beer extends Component {
    constructor(props){
        super(props);

        this.state = {
            path: "/beers/" + this.props.id
        }
    }
  render() {
    return (
      <div className="beer">
        <div className="beer-img">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="beer-dscrp">
          <h1><Link to={this.state.path}>{this.props.name}</Link></h1>
          <h2>{this.props.tagline}</h2>
          <p>Contributed by: {this.props.contributed_by}</p>
        </div>
        <hr />
      </div>
    );
  }
}
