import React, { Component } from "react";
import axios from "axios";
// import cors from "cors";
import BeerPartial from "./BeerPartial";

export default class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/all").then(tasksFromBackend => {
      this.setState({
        ...this.state,
        beers: tasksFromBackend.data
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.beers.map(beer => {
          return (
            <BeerPartial
              key={beer._id}
              target={beer._id}
              src={beer.image_url}
              image_alt={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              contributed_by={beer.contributed_by}
            ></BeerPartial>
          );
        })}
      </div>
    );
  }
}
