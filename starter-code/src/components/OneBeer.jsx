import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

export default class OneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((apiResponse) => {
        // console.log(apiResponse.data);
        this.setState({
          beer: apiResponse.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    if (!this.state.beer) return null;

    return (
      <div>
        <img className="beerImg" src={this.state.beer.image_url} alt="" />
        <p>{this.state.beer.name}</p>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}
