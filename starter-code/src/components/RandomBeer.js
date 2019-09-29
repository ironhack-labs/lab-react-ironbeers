import React, { Component } from "react";
import Header from "./Header";
import BeerDetail from "./BeerDetail";
import axios from "axios";
import BeerCard from "./BeerCard";

class RandomBeer extends Component {
  state = {
    randomBeer: null
  };
  componentDidMount = () => {
    this.getRandomBeer();
  };

  getRandomBeer() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers/random")
      .then(response => {
        const randomBeer = response.data;
        console.log(randomBeer);
        this.setState({
          randomBeer: randomBeer
        });
      });
  }

  render() {
    console.log(this.state.randomBeer);
    if (!this.state.randomBeer) return <></>;
    return (
      <>
        <Header />
        <div className="container">
          <img
            src={this.state.randomBeer.image_url}
            height="300px"
            alt="Beer bottle"
          />
          <div className="flex-line">
            <h1>{this.state.randomBeer.name}</h1>
            <h2>{this.state.randomBeer.attenuation_level}</h2>
          </div>
          <div className="flex-line">
            <h3>{this.state.randomBeer.tagline}</h3>
            <h4>{this.state.randomBeer.first_brewed}</h4>
          </div>
          <div className="flex-line">
            <p>{this.state.randomBeer.description}</p>
          </div>
          <div className="flex-line">
            <p>{this.state.randomBeer.contributed_by}</p>
          </div>
        </div>
      </>
    );
  }
}

export default RandomBeer;
