import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Beer extends Component {
  render() {
    
    return (
      <div>
        <div>
          <img style={{ maxWidth: 50 }} src={this.props.beerData.image_url} /><br></br>
          <Link to={`/beers/${this.props.beerData._id}`}>{this.props.beerData.name}</Link>
          <div>{this.props.beerData.tagline}</div>
          <div>
            <strong>Created by: </strong>
            {this.props.beerData.contributed_by.split(" ")[0]}
          </div>
        </div>
      </div>
    );
  }
}
