import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkCard extends Component {
  render() {
    return (
      <div className="p-1 mt-1_5">
        <img src={this.props.image} alt="beers" />
        <h2 className="m-0_5">{this.props.title}</h2>
        <Link to={this.props.link} className="m-0_5">{this.props.label}</Link>
      </div>
    );
  }
}

export default LinkCard;
