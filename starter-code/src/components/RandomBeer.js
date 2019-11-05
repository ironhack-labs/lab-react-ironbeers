import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        this.setState({
          beers: response.data
        });
      });
  }

  render() {
    return <div></div>;
  }
}

export default RandomBeer;
