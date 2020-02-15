import React from "react";

class BeerDetails extends React.Component {
  render() {
    return (
      <div className="BeerInfo">
        <div className="imageBox">
          <img src={this.props.beer.image_url} alt="beer" width="7%" />
        </div>
        <br />
        <div className="beer">
          <h3>{this.props.beer.name}</h3>
          <small>{this.props.beer.tagline}</small>
          <br />
          <br />
          <p>{this.props.beer.description}</p>
          <small>{this.props.beer.contributed_by}</small>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
