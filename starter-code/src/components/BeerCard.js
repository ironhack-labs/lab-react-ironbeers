import React, { Component } from "react";
import { Link } from "react-router-dom";

class BeerCard extends Component {
  render() {
    const beerData = this.props.beerData;
    return (
      <div key={beerData._id} className="beer-card container">
        <div className="beer-img">
          <img src={beerData.image_url} height="200px" alt="Beer bottle" />
        </div>
        <div className="beer-info">
        <Link to={`/beers/${beerData._id}`}>
            <h1>{beerData.name}</h1>
        </Link>
          <h3>{beerData.tagline}</h3>
          <h4>{beerData.contributed_by}</h4>
        </div>
      </div>
    );
  }
}

export default BeerCard;
