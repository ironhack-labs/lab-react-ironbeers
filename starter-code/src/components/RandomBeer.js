import React, { Component } from "react";
import axios from "axios";
import Beer from "./Beer";

class RandomBeer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        this.setState({
          beer: response.data
        });
      });
  }
  render() {
    return <Beer beer={this.state.beer} />;
  }
}

export default RandomBeer;
