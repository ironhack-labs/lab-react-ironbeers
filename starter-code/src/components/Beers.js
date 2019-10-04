import React, { Component } from "react";
import axios from "axios";
import Beer from "./Beer.js";
import Navbar from "./Navbar.js";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    console.log("que pasa")
    axios.get("http://localhost:5000/all").then(res => {
      this.setState({ beers: res.data });
    });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="all-beers">
          {this.state.beers.map((beer, idx) => (
            <Beer
              key={idx}
              image={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              contributed={beer.contributed_by}
              id={beer._id}
            ></Beer>
          ))}
        </div>
      </div>
    );
  }
}
