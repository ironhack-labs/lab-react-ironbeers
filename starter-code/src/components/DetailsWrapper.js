import React, { Component } from "react";
import { getBeerById, getRandomBeer } from "../services/BeersDS";
import Details from "./Details";

export default class DetailsWrapper extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    // Searchs for the beer data
    // const beer = beers.find((beer) => beer._id === props.match.params.id);
    // If there an origin route, shows that beer
    if (this.props.match) {
      getBeerById(this.props.match.params.id)
        .then((res) => this.setState({ beer: res.data }))
        .catch((reason) => console.log("Error: ", reason));
    } else {
      // If there is no origin route, it shows a random beer
      getRandomBeer()
        .then((res) => this.setState({ beer: res.data }))
        .catch((reason) => console.log("Error: ", reason));
    }
  }

  render() {
    return <Details {...this.state.beer} />;
  }
}
