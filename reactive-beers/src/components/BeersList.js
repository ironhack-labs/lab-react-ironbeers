import React, { Component } from "react";
import BeerCard from "./BeerCard";
import axios from "axios";

class BeersList extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="card-container">
        {this.state.beers.map((el, index) => (
          <BeerCard key={index} {...el} />
        ))}
      </div>
    );
  }
}

export default BeersList;
