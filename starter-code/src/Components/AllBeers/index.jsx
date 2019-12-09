import React, { Component } from "react";
import { getBeers } from "./../../Services/beers";
import SingleBeer from "./../SingleBeer";

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  async componentDidMount() {
    try {
      const beers = await getBeers();
      // console.log(beers);
      this.setState({
        beers
      });
    } catch (error) {
      throw error;
    }
  }
  render() {
    // console.log(this.state.beers[0]);
    return (
      <div>
        {this.state.beers.map(beer => {
          return <SingleBeer {...beer} key={beer._id} />;
        })}
      </div>
    );
  }
}

export default AllBeers;
