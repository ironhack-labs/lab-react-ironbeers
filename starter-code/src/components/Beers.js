import React, { Component } from "react";
import Header from "./Header";
import Beer from "./Beer";
import axios from "axios";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/all").then(response => {
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <img src="/images/beers.png" alt="" />
        <h1>All Beers</h1>
        <div className="beers-container">
          {this.state.beers.map((beer, i) => (
            <Beer
              key={i}
              image={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              contributed_by={beer.contributed_by}
              id={beer._id}
            />
          ))}

        </div>
      </div>
    );
  }
}
