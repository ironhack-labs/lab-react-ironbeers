import React, { Component } from "react";
import axios from "axios";
import Beer from "./Beer";

class SingleBeer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
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

export default SingleBeer;
