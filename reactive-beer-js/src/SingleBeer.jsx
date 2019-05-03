import React, { Component } from "react";
import axios from "axios";

export default class SingleBeer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/single/${this.props.match.params.id}`)
      .then(beer => {
        this.setState({
          ...this.state,
          beer: beer.data
        });
      });
  }

  render() {
    const beer = this.state.beer;
    return <div>{beer.name}</div>;
  }
}
