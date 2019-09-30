import React, { Component } from "react";
import BeerCard from "../components/BeerCard";
import { getOneBeer } from "../services/beers-api";

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    getOneBeer(this.props.match.params.id)
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
      <div className="BeerDetail">
        <h2>Beer Detail</h2>
        <BeerCard beer={this.state.beer} />
      </div>
    );
  }
}
