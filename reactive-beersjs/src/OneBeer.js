import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

class OneBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    console.log("loading one beer");

    axios
      .get(
        `https://ironbeer-api.herokuapp.com/beers/${
          this.props.match.params.BeerID
        }`
      )
      .then(response => {
        console.log("response", response.data);
        this.setState({ beer: response.data[0] });
      });
  }

  render() {
    console.log(this.state.beer, "one beer");
    return (
      <div>
        <br />
        {this.state.beer && (
          <div>
            <p> {this.state.beer.name} </p>
            <p> {this.state.beer.tagline} </p>
          </div>
        )}
      </div>
    );
  }
}

export default OneBeer;
