import React, { Component } from "react";
import BeerCard from "../components/BeerCard";
import { getRandomBeer } from "../services/beers-api";

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    getRandomBeer()
      .then(beer => {
        this.setState({
          beer: beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.beer) return <div>Loading...</div>;

    return (
      <div>
        <h1>A Random Beer</h1>
        <BeerCard beer={this.state.beer} />
      </div>
    );
  }
}
