import Axios from "axios";
import React, { Component } from "react";

class Random extends Component {
  state = {
    beer2: {},
    ready: false
  };
  componentDidMount() {
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(
      randomBeer => {
        this.setState({
          beer2: randomBeer,
          ready: true
        }); ///to receive new randomBeer
      }
    );
  }
  render() {
    console.log(this.state.beer2);
    //to get all data about random beer
    return (
      <div id="container">
        {this.state.ready ? (
          <ul>
            <img src={this.state.beer2.data.image_url} />
            <br />
            {this.state.beer2.data.name}
            <br />
            {this.state.beer2.data.tagline}
            <br />
            {this.state.beer2.data.first_brewed}
            <br />
            {this.state.beer2.data.attenuation_level}
            <br />
            {this.state.beer2.data.description}
            <br />
            {this.state.beer2.data.contributed_by}
            <br />
          </ul>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

export default Random;
