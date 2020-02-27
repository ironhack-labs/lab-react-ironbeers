import React from "react";
import "./BeerDetails.css";
import Header from "../Header/Header";

export default class BeerDetails extends React.Component {
  render() {
    return (
      <div className="BeerDetails">
        <Header></Header>
        <img src={this.props.image} alt={this.props.name} />
        <div>
          <h1>{this.props.name}</h1>
          <h1>{this.props.attenuation_level}</h1>
        </div>
        <div>
          <h2>{this.props.tagline}</h2>
          <h2>{this.props.first_brewed}</h2>
        </div>
        <p>{this.props.description}</p>
        <p>{this.props.contributed_by}</p>
      </div>
    );
  }
}
