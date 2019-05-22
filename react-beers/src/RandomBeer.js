import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  state = {
    AllBeers: []
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers/random").then(allBeers => {
      console.log(allBeers);

      this.setState({
        AllBeers: allBeers.data
      });
    });
  }

  randomBeer = () => {
    return (
    <div>
      <img alt="rando" src={this.state.AllBeers.image_url} width="30vw"></img>
      <h6>{this.state.AllBeers.name}</h6>
      <p>{this.state.AllBeers.tagline}</p>
      <p>{this.state.AllBeers.first_brewed}</p>
      <p>{this.state.AllBeers.attenuation_level}</p>
      <p>{this.state.AllBeers.description}</p>
      <p>{this.state.AllBeers.contributed_by}</p>
    </div>
    );

  };

  render() {
    return (
      <div>
        {this.randomBeer()}
      </div>
    );
  }
}

export default RandomBeer;