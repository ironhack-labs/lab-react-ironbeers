import React, { Component } from "react";
import axios from "axios";

class BeerDetails extends Component {
  constructor() {
    super();
    this.state = { beer: {} };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
      .then(response => {
        this.setState({ beer: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.description}</p>
      </div>
    );
  }
}

export default BeerDetails;
