import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://ironbeer-api.herokuapp.com/beers/random`
      )
      .then(response => {

        this.setState({ info: response.data });
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  }

  render() {
    if (this.state.info) {
      return (
        <div>
          <h2>Random Beer</h2>
          <img src={this.state.info[0].image_url} />
          <h3>{this.state.info[0].name}</h3>
          <p>{this.state.info[0].tagline}</p>
          <p>Made in: {this.state.info[0].first_brewed}</p>
          <p>Attenuation level: {this.state.info[0].attenuation_level}</p>
          <p>{this.state.info[0].description}</p>
          <p>Contributed by: {this.state.info[0].contributed_by}</p>
          <ul />
        </div>
      );
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default RandomBeer;
