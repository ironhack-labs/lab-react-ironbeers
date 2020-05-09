import React, { Component } from "react";
import HomeButton from "../components/HomeButton";
import BeerPart from "../components/BeerPart";
import axios from "axios";

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((apiResponse) => {
        this.setState({ beer: apiResponse.data });
        console.log(this.state.beer);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.beer) return null;
    return (
      <div>
        <HomeButton />
        <h1 className="randombeers-title">RANDOM BEER</h1>
        <BeerPart clbk= {this.state.beer} />
      </div>
    );
  }
}
