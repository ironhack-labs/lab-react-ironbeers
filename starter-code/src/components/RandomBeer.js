import React, { Component } from "react";
import axios from "axios";

export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getRandomBeer = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((responseApi) => {
        //   console.log(responseApi.data);
        const randomBeer =
          responseApi.data[Math.floor(Math.random() * responseApi.data.length)];
        this.setState(randomBeer);
        console.log(randomBeer);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    return (
      <div>
      test random
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
