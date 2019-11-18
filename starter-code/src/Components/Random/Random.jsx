import React from "react";
import axios from "axios";

import SingleBeer from "../SingleBeer/SingleBeer";

import "./Random.css";
export default class Random extends React.Component {
  state = {
    random: {}
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => {
      let random = res.data;
      console.log(res.data);
      this.setState({ random: random });
    });
  }

  render() {
    return (
      <div>
        <SingleBeer {...this.props} randomBeer={this.state.random} />
      </div>
    );
  }
}
