import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  state = {
    randomBeer: {}
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        this.setState({
          randomBeer: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={this.state.randomBeer.image_url} style={{height:"auto", width:"8rem"}} alt="" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{this.state.randomBeer.name}</h5>
          <h5>{this.state.randomBeer.attenuation_level}</h5>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{this.state.randomBeer.tagline}</p>
          <p>{this.state.randomBeer.first_brewed}</p>
        </div>
        <p>{this.state.randomBeer.description}</p>
        <p>{this.state.randomBeer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
