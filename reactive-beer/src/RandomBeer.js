import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  state = {
    allBeers: []
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers/random").then(allBeers => {
      console.log(allBeers);

      this.setState({
        allBeers: allBeers.data
      });
    });
  }

  randomBeer = () => {
    return (
    <div>
    <img alt="" src={this.state.allBeers.image_url} width="50"></img>
    {this.state.allBeers.name}
    <p>{this.state.allBeers.tagline}</p>
    <p>{this.state.allBeers.first_brewed}</p>
    <p>{this.state.allBeers.attenuation_level}</p>
    <p>{this.state.allBeers.description}</p>
    <p>{this.state.allBeers.contributed_by}</p>
    </div>
    );
    
  };

  render() {
    return (
      <div>
        random!!!
        {this.randomBeer()}
      </div>
    );
  }
}

export default RandomBeer;
