import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class OneBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://ih-beers-api2.herokuapp.com/beers/" +
          this.props.match.params._id
      )
      .then(response => {
        this.setState({ beer: response.data });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.beer.name}</h1>
        <img src={this.state.beer.image_url} alt="broken" height="200px"></img>
        <h1>Tagline: {this.state.beer.tagline}</h1>
        <h1>Tagline: {this.state.beer.first_brewed}</h1>
        <h1>Tagline: {this.state.beer.attenuation_level}</h1>
        <h1>Tagline: {this.state.beer.description}</h1>
        <h1>Contributed by: {this.state.beer.contributed_by}</h1>
      </div>
    );
  }
}
export default OneBeer;
