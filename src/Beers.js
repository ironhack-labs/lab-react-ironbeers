import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      ListBeers: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/all").then(allBeers => {
      const allBeersPay = allBeers.data;

      this.setState({
        ...this.state,
        ListBeers: allBeersPay
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />

        {this.state.ListBeers.map(beers => {
          return (
            <Link to={"/beers/" + beers._id}>
              <p>{beers.name}</p>
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}
