import React, { Component } from "react";
import CardList from "./CardList";
//import beers from "../services/BeersDS.json";
import { getBeers } from "../services/BeersDS";

export default class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    getBeers()
      .then((res) => {
        const beers = res.data;
        this.setState({ beers });
      })
      .catch((reason) => {
        console.log("Error: ", reason);
      });
  }

  render() {
    return (
      <div>
        <CardList beers={this.state.beers} />
      </div>
    );
  }
}
