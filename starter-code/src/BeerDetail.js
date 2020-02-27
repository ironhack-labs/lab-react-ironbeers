import React from "react";
import "./Beers.css";

class BeerDetail extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.beer.image_url} />
        <h3>{this.props.beer.name}</h3>
        <p>{this.props.beer.tagline}</p>
        <p>{this.props.beer.first_brewed}</p>
        <p>{this.props.beer.attenuation_level}</p>
        <p>{this.props.beer.description}</p>
        <p>{this.props.beer.contributed_by}</p>
      </div>
    );
  }
}
export default BeerDetail;
